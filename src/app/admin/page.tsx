"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  LeadSubmission,
  getStoredLeads,
  saveStoredLeads,
  initialMockLeads,
} from "@/lib/leadsStorage";
import {
  LayoutDashboard,
  Inbox,
  Clock,
  CheckCircle2,
  PhoneCall,
  Archive,
  BarChart3,
  Settings,
  Search,
  Filter,
  Download,
  Trash2,
  RefreshCw,
  MessageSquare,
  Mail,
  Building,
  User,
  Calendar,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Check,
  X,
  Menu,
  ChevronRight,
  TrendingUp,
  PieChart,
  Users,
  Code2,
  Package,
  Layers,
  ArrowUpRight,
  Globe
} from "lucide-react";

type ActiveView =
  | "all-leads"
  | "new-leads"
  | "in-discussion"
  | "converted"
  | "closed"
  | "analytics"
  | "settings";

export default function AdminPage() {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [activeView, setActiveView] = useState<ActiveView>("all-leads");
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState<string>("All");
  const [selectedLead, setSelectedLead] = useState<LeadSubmission | null>(null);
  const [activeNotes, setActiveNotes] = useState("");
  const [isCopied, setIsCopied] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const data = getStoredLeads();
    setLeads(data);
    if (data.length > 0) {
      setSelectedLead(data[0]);
      setActiveNotes(data[0].notes || "");
    }
  }, []);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 2800);
  };

  const handleStatusChange = (id: string, newStatus: LeadSubmission["status"]) => {
    const updated = leads.map((lead) =>
      lead.id === id ? { ...lead, status: newStatus } : lead
    );
    setLeads(updated);
    saveStoredLeads(updated);
    if (selectedLead?.id === id) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
    showNotification(`Status updated to "${newStatus}"`);
  };

  const handleSaveNotes = () => {
    if (!selectedLead) return;
    const updated = leads.map((lead) =>
      lead.id === selectedLead.id ? { ...lead, notes: activeNotes } : lead
    );
    setLeads(updated);
    saveStoredLeads(updated);
    setSelectedLead({ ...selectedLead, notes: activeNotes });
    showNotification("Internal note saved successfully");
  };

  const handleDeleteLead = (id: string) => {
    if (!confirm("Are you sure you want to remove this lead inquiry?")) return;
    const updated = leads.filter((l) => l.id !== id);
    setLeads(updated);
    saveStoredLeads(updated);
    if (selectedLead?.id === id) {
      const nextLead = updated.length > 0 ? updated[0] : null;
      setSelectedLead(nextLead);
      setActiveNotes(nextLead?.notes || "");
    }
    showNotification("Lead removed from panel");
  };

  const handleResetMockData = () => {
    setLeads(initialMockLeads);
    saveStoredLeads(initialMockLeads);
    setSelectedLead(initialMockLeads[0]);
    setActiveNotes(initialMockLeads[0]?.notes || "");
    showNotification("Restored default lead records");
  };

  const handleClearAll = () => {
    if (!confirm("Clear all lead inquiries? This will empty all local entries.")) return;
    setLeads([]);
    saveStoredLeads([]);
    setSelectedLead(null);
    setActiveNotes("");
    showNotification("All leads cleared");
  };

  const exportToCSV = () => {
    if (leads.length === 0) {
      alert("No leads to export.");
      return;
    }

    const headers = [
      "ID",
      "Created At",
      "Name",
      "Business Name",
      "Mobile",
      "Service Requested",
      "Preferred Channel",
      "Status",
      "Description",
      "Internal Notes",
    ];

    const rows = leads.map((l) => [
      `"${l.id}"`,
      `"${new Date(l.createdAt).toLocaleString()}"`,
      `"${(l.name || "").replace(/"/g, '""')}"`,
      `"${(l.businessName || "").replace(/"/g, '""')}"`,
      `"${l.mobile}"`,
      `"${l.workNeeded}"`,
      `"${l.preferredContact}"`,
      `"${l.status}"`,
      `"${(l.description || "").replace(/"/g, '""')}"`,
      `"${(l.notes || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `bitnarylabs_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification("Exported leads to CSV");
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(type);
    setTimeout(() => setIsCopied(null), 2000);
    showNotification(`Copied ${type} to clipboard`);
  };

  const counts = useMemo(() => {
    return {
      all: leads.length,
      new: leads.filter((l) => l.status === "New").length,
      inDiscussion: leads.filter(
        (l) => l.status === "In Discussion" || l.status === "Contacted"
      ).length,
      converted: leads.filter((l) => l.status === "Converted").length,
      closed: leads.filter((l) => l.status === "Closed").length,
    };
  }, [leads]);

  const filteredLeads = useMemo(() => {
    return leads.filter((item) => {
      const q = search.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(q) ||
        (item.businessName && item.businessName.toLowerCase().includes(q)) ||
        item.mobile.toLowerCase().includes(q) ||
        item.workNeeded.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

      let matchesView = true;
      if (activeView === "new-leads") matchesView = item.status === "New";
      else if (activeView === "in-discussion")
        matchesView = item.status === "In Discussion" || item.status === "Contacted";
      else if (activeView === "converted") matchesView = item.status === "Converted";
      else if (activeView === "closed") matchesView = item.status === "Closed";

      const matchesService =
        serviceFilter === "All" ? true : item.workNeeded === serviceFilter;

      return matchesSearch && matchesView && matchesService;
    });
  }, [leads, search, activeView, serviceFilter]);

  // Lead breakdown stats for analytics tab
  const serviceBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    leads.forEach((l) => {
      map[l.workNeeded] = (map[l.workNeeded] || 0) + 1;
    });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [leads]);

  const cleanPhoneForWhatsApp = (phoneStr: string) => {
    return phoneStr.replace(/[^0-9]/g, "");
  };

  interface MenuItem {
    id: ActiveView;
    label: string;
    icon: typeof Inbox;
    count?: number;
    highlightBadge?: boolean;
  }

  interface MenuSection {
    group: string;
    items: MenuItem[];
  }

  const navMenuItems: MenuSection[] = [
    {
      group: "PIPELINE",
      items: [
        {
          id: "all-leads",
          label: "All Inquiries",
          icon: Inbox,
          count: counts.all,
        },
        {
          id: "new-leads",
          label: "New Leads",
          icon: Sparkles,
          count: counts.new,
          highlightBadge: counts.new > 0,
        },
        {
          id: "in-discussion",
          label: "In Discussion",
          icon: Clock,
          count: counts.inDiscussion,
        },
        {
          id: "converted",
          label: "Converted Clients",
          icon: CheckCircle2,
          count: counts.converted,
        },
        {
          id: "closed",
          label: "Archived / Closed",
          icon: Archive,
          count: counts.closed,
        },
      ],
    },
    {
      group: "MANAGEMENT",
      items: [
        {
          id: "analytics",
          label: "Pipeline Analytics",
          icon: BarChart3,
        },
        {
          id: "settings",
          label: "Settings & Storage",
          icon: Settings,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#06080e] text-slate-100 flex flex-col md:flex-row">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0f1422] border border-cyan-500/40 text-white px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs backdrop-blur-xl animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>{notification}</span>
        </div>
      )}

      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#0a0d17] border-b border-white/[0.08] sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg bg-white/[0.04] text-neutral-300 hover:text-white"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-white/[0.08] flex items-center justify-center font-bold text-xs text-white">
              BL
            </div>
            <span className="font-semibold text-sm text-white">Admin Console</span>
          </div>
        </div>

        <Link
          href="/"
          className="text-xs text-neutral-400 hover:text-white flex items-center gap-1"
        >
          <span>Main Site</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* LEFT SIDEBAR */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-[#080b13] border-r border-white/[0.08] z-50 flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 border-b border-white/[0.06] flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/30 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-xs font-bold text-white tracking-tight">BL</span>
            </div>
            <div>
              <span className="text-sm font-semibold tracking-tight text-white block">
                BitnaryLabs
              </span>
              <span className="text-[10px] text-cyan-400 font-medium tracking-wide uppercase block">
                Admin Console
              </span>
            </div>
          </Link>
        </div>

        {/* Access Status Banner */}
        <div className="mx-4 mt-4 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300/90 flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
          <div className="leading-tight">
            <span className="font-semibold block">Open Access Mode</span>
            <span className="text-[10px] text-amber-300/70">
              No auth required right now
            </span>
          </div>
        </div>

        {/* Menu Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-6 overflow-y-auto">
          {navMenuItems.map((section) => (
            <div key={section.group} className="space-y-1">
              <div className="px-3 text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                {section.group}
              </div>
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveView(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon
                        className={`w-4 h-4 ${
                          isActive
                            ? "text-black"
                            : item.highlightBadge
                            ? "text-emerald-400"
                            : "text-neutral-400"
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>

                    {item.count !== undefined && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          isActive
                            ? "bg-black/10 text-black"
                            : item.highlightBadge
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-white/[0.06] text-neutral-400"
                        }`}
                      >
                        {item.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Sidebar Footer Link to Public Website */}
        <div className="p-3 border-t border-white/[0.06] space-y-1.5">
          <Link
            href="/contact"
            target="_blank"
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-neutral-400 hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Live Contact Page</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
          </Link>

          <Link
            href="/"
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-neutral-400 hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              <span>Back to Main Website</span>
            </div>
          </Link>
        </div>
      </aside>

      {/* MAIN VIEW AREA */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Top Header Bar */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white capitalize">
              {activeView === "all-leads" && "All Client Inquiries"}
              {activeView === "new-leads" && "New Inquiries Requiring Review"}
              {activeView === "in-discussion" && "Leads in Active Discussion"}
              {activeView === "converted" && "Converted Clients & Deals"}
              {activeView === "closed" && "Closed & Archived Inquiries"}
              {activeView === "analytics" && "Pipeline & Conversion Analytics"}
              {activeView === "settings" && "Admin Settings & Storage Control"}
            </h1>
            <p className="text-xs text-neutral-400 mt-1">
              {activeView.includes("lead") || activeView === "converted" || activeView === "closed" || activeView === "in-discussion"
                ? `Showing ${filteredLeads.length} inquiry record${filteredLeads.length === 1 ? "" : "s"}`
                : "Manage your leads database and BitnaryLabs website integration"}
            </p>
          </div>

          {/* Quick Toolbar */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={exportToCSV}
              className="apple-btn-secondary px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5"
              title="Export all leads to CSV file"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleResetMockData}
              className="apple-btn-secondary px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5"
              title="Reload sample inquiries"
            >
              <RefreshCw className="w-3.5 h-3.5 text-neutral-400" />
              <span className="hidden sm:inline">Reset Demo</span>
            </button>
          </div>
        </div>

        {/* TAB 1: LEADS PIPELINE VIEWS */}
        {(activeView === "all-leads" ||
          activeView === "new-leads" ||
          activeView === "in-discussion" ||
          activeView === "converted" ||
          activeView === "closed") && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Search, Filter, and Leads List */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-4">
              {/* Search & Service Filter */}
              <div className="apple-card rounded-2xl p-3.5 space-y-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by name, company, phone, service, or requirements..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-cyan-400/40 transition-colors"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <Filter className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Service:</span>
                  <select
                    value={serviceFilter}
                    onChange={(e) => setServiceFilter(e.target.value)}
                    className="px-2.5 py-1 rounded-lg bg-[#0c0d14] border border-white/[0.08] text-white text-[11px] focus:outline-none focus:border-white/30"
                  >
                    <option value="All">All Services</option>
                    <option value="Inventory software">StockSense (Inventory)</option>
                    <option value="HR software">PeopleDesk (HR & Payroll)</option>
                    <option value="E-Commerce Website">E-Commerce Website</option>
                    <option value="Corporate Website">Corporate Platform</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Other">Bespoke Engineering</option>
                  </select>

                  <span className="ml-auto text-[11px] text-neutral-500">
                    {filteredLeads.length} result{filteredLeads.length === 1 ? "" : "s"}
                  </span>
                </div>
              </div>

              {/* Inquiries List */}
              <div className="space-y-2.5 max-h-[720px] overflow-y-auto pr-1">
                {filteredLeads.length === 0 ? (
                  <div className="apple-card rounded-2xl p-12 text-center space-y-3">
                    <Inbox className="w-8 h-8 text-neutral-600 mx-auto" />
                    <h3 className="text-sm font-semibold text-white">No inquiries in this category</h3>
                    <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                      Try selecting another menu option or clearing your search keywords.
                    </p>
                    <button
                      onClick={handleResetMockData}
                      className="apple-btn-secondary px-4 py-2 rounded-xl text-xs font-medium"
                    >
                      Reload Demo Inquiries
                    </button>
                  </div>
                ) : (
                  filteredLeads.map((item) => {
                    const isSelected = selectedLead?.id === item.id;
                    const formattedDate = new Date(item.createdAt).toLocaleDateString("en-IN", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    });

                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          setSelectedLead(item);
                          setActiveNotes(item.notes || "");
                        }}
                        className={`cursor-pointer rounded-2xl p-4 transition-all duration-200 border ${
                          isSelected
                            ? "bg-white/[0.08] border-cyan-400/50 shadow-lg shadow-cyan-500/5 translate-x-1"
                            : "bg-[#0b0e18]/80 hover:bg-white/[0.04] border-white/[0.06]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-white group-hover:text-cyan-300">
                                {item.name}
                              </span>
                              {item.businessName && (
                                <span className="text-xs text-neutral-400 font-normal">
                                  • {item.businessName}
                                </span>
                              )}
                            </div>

                            <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-400">
                              <span className="text-cyan-400 font-medium">
                                {item.workNeeded}
                              </span>
                              <span>•</span>
                              <span>{item.mobile}</span>
                              <span>•</span>
                              <span className="text-neutral-500 flex items-center gap-1">
                                <Clock className="w-3 h-3 inline" /> {formattedDate}
                              </span>
                            </div>
                          </div>

                          {/* Status Tag */}
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border uppercase tracking-wider shrink-0 ${
                              item.status === "New"
                                ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                                : item.status === "In Discussion"
                                ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
                                : item.status === "Contacted"
                                ? "bg-sky-500/15 text-sky-300 border-sky-500/30"
                                : item.status === "Converted"
                                ? "bg-purple-500/15 text-purple-300 border-purple-500/30"
                                : "bg-neutral-500/15 text-neutral-400 border-neutral-500/30"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>

                        <p className="mt-2 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="mt-3 flex items-center justify-between text-[11px] border-t border-white/[0.04] pt-2 text-neutral-500">
                          <span>
                            Prefers: <strong className="text-neutral-300 font-medium">{item.preferredContact}</strong>
                          </span>
                          {item.notes && (
                            <span className="text-amber-300/80 italic text-[10px]">
                              Note attached
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Right: Lead Detail View */}
            <div className="lg:col-span-5 xl:col-span-5 sticky top-6">
              {selectedLead ? (
                <div className="apple-card rounded-2xl p-6 space-y-6">
                  {/* Lead Info Header */}
                  <div className="flex items-start justify-between border-b border-white/[0.08] pb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-white">
                        {selectedLead.name}
                      </h2>
                      {selectedLead.businessName && (
                        <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-medium mt-1">
                          <Building className="w-3.5 h-3.5" />
                          <span>{selectedLead.businessName}</span>
                        </div>
                      )}
                      <div className="text-[11px] text-neutral-500 mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>
                          Received: {new Date(selectedLead.createdAt).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteLead(selectedLead.id)}
                      title="Delete this lead entry"
                      className="p-2 rounded-xl text-neutral-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Move Stage Selector */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-2">
                      Pipeline Stage
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(["New", "Contacted", "In Discussion", "Converted", "Closed"] as const).map(
                        (st) => {
                          const isActive = selectedLead.status === st;
                          return (
                            <button
                              key={st}
                              onClick={() => handleStatusChange(selectedLead.id, st)}
                              className={`px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all border ${
                                isActive
                                  ? "bg-white text-black font-semibold border-white"
                                  : "bg-white/[0.03] text-neutral-400 hover:text-white border-white/[0.06]"
                              }`}
                            >
                              {st}
                            </button>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* Outreach buttons */}
                  <div className="space-y-2">
                    <span className="block text-xs font-medium text-neutral-400">
                      Reach Out
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`https://wa.me/${cleanPhoneForWhatsApp(selectedLead.mobile)}?text=${encodeURIComponent(
                          `Hello ${selectedLead.name}, thank you for reaching out to BitnaryLabs regarding your requirement for "${selectedLead.workNeeded}". I would love to discuss how we can help.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-between text-emerald-400 transition-colors group"
                      >
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          <span className="text-xs font-semibold">WhatsApp</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                      </a>

                      <a
                        href={`tel:${selectedLead.mobile}`}
                        className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-between text-neutral-200 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <PhoneCall className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-semibold">Call Phone</span>
                        </div>
                        <span className="text-[10px] text-neutral-500">Tel</span>
                      </a>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs">
                      <span className="text-neutral-400">Phone: <strong className="text-white">{selectedLead.mobile}</strong></span>
                      <button
                        onClick={() => copyToClipboard(selectedLead.mobile, "phone")}
                        className="text-[11px] text-cyan-400 hover:text-cyan-300 font-medium"
                      >
                        {isCopied === "phone" ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>

                  {/* Requirement Details */}
                  <div className="space-y-2">
                    <span className="block text-xs font-medium text-neutral-400">
                      Requirement Details
                    </span>
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-400">Service:</span>
                        <span className="text-white font-medium bg-white/10 px-2.5 py-0.5 rounded-md text-[11px]">
                          {selectedLead.workNeeded}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-400">Channel:</span>
                        <span className="text-neutral-200 font-medium">{selectedLead.preferredContact}</span>
                      </div>
                      <div className="pt-2 border-t border-white/[0.04]">
                        <span className="text-[11px] text-neutral-400 block mb-1">
                          Brief:
                        </span>
                        <p className="text-xs text-neutral-200 leading-relaxed whitespace-pre-line">
                          {selectedLead.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Internal Notes */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <label className="font-medium text-neutral-400">Internal Notes</label>
                      <span className="text-[10px] text-neutral-500">Private</span>
                    </div>
                    <textarea
                      rows={3}
                      value={activeNotes}
                      onChange={(e) => setActiveNotes(e.target.value)}
                      placeholder="Pricing discussed, lead qualification status..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-cyan-400/40 transition-colors"
                    />
                    <button
                      onClick={handleSaveNotes}
                      className="apple-btn-secondary w-full py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Save Note</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="apple-card rounded-2xl p-10 text-center space-y-3">
                  <Inbox className="w-8 h-8 text-neutral-600 mx-auto" />
                  <h3 className="text-sm font-semibold text-white">No lead selected</h3>
                  <p className="text-xs text-neutral-500">
                    Select an inquiry from the list to view requirements and take quick actions.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: ANALYTICS VIEW */}
        {activeView === "analytics" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="apple-card rounded-2xl p-5">
                <span className="text-xs text-neutral-400 block">Total Pipeline Value</span>
                <span className="text-3xl font-semibold text-white mt-1 block">
                  {leads.length} Leads
                </span>
                <span className="text-[11px] text-emerald-400 mt-1 block font-medium">
                  {counts.new} newly received
                </span>
              </div>

              <div className="apple-card rounded-2xl p-5">
                <span className="text-xs text-neutral-400 block">Conversion Rate</span>
                <span className="text-3xl font-semibold text-cyan-400 mt-1 block">
                  {leads.length > 0
                    ? `${Math.round((counts.converted / leads.length) * 100)}%`
                    : "0%"}
                </span>
                <span className="text-[11px] text-neutral-500 mt-1 block">
                  {counts.converted} converted deals
                </span>
              </div>

              <div className="apple-card rounded-2xl p-5">
                <span className="text-xs text-neutral-400 block">Active Pipeline</span>
                <span className="text-3xl font-semibold text-amber-300 mt-1 block">
                  {counts.inDiscussion}
                </span>
                <span className="text-[11px] text-neutral-500 mt-1 block">
                  Consultation in progress
                </span>
              </div>

              <div className="apple-card rounded-2xl p-5">
                <span className="text-xs text-neutral-400 block">Primary Channel</span>
                <span className="text-3xl font-semibold text-white mt-1 block">
                  WhatsApp
                </span>
                <span className="text-[11px] text-neutral-500 mt-1 block">
                  70%+ preferred contact mode
                </span>
              </div>
            </div>

            {/* Demand by Service Breakdown */}
            <div className="apple-card rounded-2xl p-6">
              <h2 className="text-base font-semibold text-white mb-1">
                Demand by Service Category
              </h2>
              <p className="text-xs text-neutral-400 mb-6">
                Inquiry distribution across BitnaryLabs products and web studio offerings
              </p>

              <div className="space-y-4">
                {serviceBreakdown.map(([service, count]) => {
                  const percent = leads.length > 0 ? Math.round((count / leads.length) * 100) : 0;
                  return (
                    <div key={service} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white font-medium">{service}</span>
                        <span className="text-neutral-400">
                          {count} inquiries ({percent}%)
                        </span>
                      </div>
                      <div className="h-2 w-full bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SETTINGS & STORAGE */}
        {activeView === "settings" && (
          <div className="max-w-3xl space-y-6">
            <div className="apple-card rounded-2xl p-6 space-y-4">
              <h2 className="text-base font-semibold text-white">Database & Storage Mode</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Currently, this admin panel runs in <strong>zero-backend local mode</strong> using HTML5 localStorage.
                All inquiries submitted through the contact page are saved directly to this browser.
              </p>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs">
                <div>
                  <span className="text-white font-medium block">Current Record Count</span>
                  <span className="text-neutral-500 text-[11px]">Key: bitnarylabs_leads</span>
                </div>
                <span className="text-cyan-400 font-semibold">{leads.length} records</span>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={exportToCSV}
                  className="apple-btn-primary px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Backup (CSV)</span>
                </button>

                <button
                  onClick={handleResetMockData}
                  className="apple-btn-secondary px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Load Sample Leads</span>
                </button>

                <button
                  onClick={handleClearAll}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-red-400 hover:bg-red-500/10 border border-red-500/20 transition-colors flex items-center gap-2"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Wipe All Local Records</span>
                </button>
              </div>
            </div>

            <div className="apple-card rounded-2xl p-6 space-y-3">
              <h2 className="text-base font-semibold text-white">Backend Integration Ready</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                When you are ready to connect a real database (PostgreSQL, Supabase, MongoDB, or Prisma), the API service layer in <code className="text-cyan-400 font-mono text-[11px]">src/lib/leadsStorage.ts</code> can be swapped with a server action or REST/tRPC endpoint with zero UI disruption.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
