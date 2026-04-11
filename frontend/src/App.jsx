import { useState, useEffect } from "react";
import axios from "axios";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Sidebar from "./components/SideBar";
import TopNav from "./components/TopNav";

import Dashboard from "./views/Dashboard";
import Templates from "./views/Templates";
import Library from "./views/Library";
import AILab from "./views/AILab";
import Projects from "./views/Projects";
import Assets from "./views/Assets";
import AIStyles from "./views/AIStyles";
import Settings from "./views/Settings";
import AIFeatures from "./views/AIFeatures";
import Export from "./views/Export";

function App() {
  const [videos, setVideos] = useState([]);
  const [music, setMusic] = useState(null);
  const [jobId, setJobId] = useState("");
  const [status, setStatus] = useState("");
  const [current, setCurrent] = useState("dashboard");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const startGeneration = async () => {
    if (!videos.length || !music) {
      alert("Upload files first");
      return;
    }

    const formData = new FormData();
    videos.forEach((v) => formData.append("videos", v));
    formData.append("music", music);

    const res = await fetch("http://127.0.0.1:8000/api/v1/generate-reel", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setJobId(data.job_id);
    setStatus("processing");
  };


  const render = () => {
    switch (current) {
      case "dashboard":
        return (
          <Dashboard
            onGenerate={startGeneration}
            progress={progress}
            isGenerating={isGenerating}
          />
        );
      case "templates":
        return (
          <Templates
            onSelect={() => {
              setCurrent("dashboard");
              addToast("Template selected!");
            }}
          />
        );
      case "library":
        return <Library onAction={(msg) => addToast(msg)} />;
      case "ai-lab":
        return <AILab onAction={(msg) => addToast(msg)} />;
      case "projects":
        return (
          <Projects
            onSelect={() => {
              setCurrent("dashboard");
              addToast("Project loaded!");
            }}
          />
        );
      case "assets":
        return <Assets onAction={(msg) => addToast(msg)} />;
      case "ai-styles":
        return <AIStyles onSelect={() => addToast("Style applied!")} />;
      case "settings":
        return <Settings onAction={(msg) => addToast(msg)} />;
      case "ai-features":
        return <AIFeatures onLaunch={() => setCurrent("dashboard")} />;
      case "export":
        return (
          <Export
            onAction={(msg) => addToast(msg)}
            onReset={() => {
              setProgress(0);
              setCurrent("dashboard");
            }}
          />
        );
      default:
        return (
          <Dashboard
            onGenerate={startGeneration}
            progress={progress}
            isGenerating={isGenerating}
          />
        );
    }
  };

  const getTitle = () => {
    switch (current) {
      case "dashboard":
        return "AI Reel Generator";
      case "templates":
        return "Templates";
      case "library":
        return "Library";
      case "ai-lab":
        return "AI Lab";
      case "projects":
        return "Projects";
      case "assets":
        return "Assets";
      case "ai-styles":
        return "AI Styles";
      case "settings":
        return "Settings";
      case "ai-features":
        return "AI Features";
      case "export":
        return "Export";
      default:
        return "";
    }
  };

  const getDescription = () => {
    switch (current) {
      case "dashboard":
        return "Transform raw footage into cinematic masterpieces using our deep-learning synthesis engine.";
      case "templates":
        return "Choose a starting point for your next masterpiece.";
      case "library":
        return "Manage and export your generated reels.";
      case "ai-lab":
        return "Experimental features from our synthesis engine.";
      case "projects":
        return "Continue where you left off.";
      case "assets":
        return "Your uploaded media and project files.";
      case "ai-styles":
        return "Fine-tune the visual identity of your reels.";
      case "settings":
        return "Manage your account and app preferences.";
      case "ai-features":
        return "The power of Flux Engine.";
      case "export":
        return "Your cinematic masterpiece is ready.";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <TopNav current={current} onChange={setCurrent} />

      <main className="flex min-h-[calc(100vh-80px)]">
        <Sidebar current={current} onChange={setCurrent} />

        <section className="flex-grow lg:ml-64 p-8 max-w-screen-2xl mx-auto w-full">
          {current !== "ai-features" && current !== "export" && (
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-on-surface mb-2">
                {getTitle()}
              </h1>
              <p className="text-on-surface-variant text-lg max-w-2xl">
                {getDescription()}
              </p>
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {render()}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setCurrent("dashboard");
            addToast("New project created!");
          }}
          className="w-14 h-14 rounded-full ai-pulse flex items-center justify-center text-on-primary shadow-2xl transition-all group"
        >
          <Plus className="w-8 h-8 group-hover:rotate-45 transition-transform" />
        </motion.button>
      </div>

      <div className="fixed top-24 right-8 z-50 flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-surface-bright border border-primary/20 p-4 rounded-xl shadow-2xl flex items-center gap-4 pointer-events-auto min-w-[240px]"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-sm font-medium text-on-surface">
                {toast.message}
              </p>
              <button
                onClick={() =>
                  setToasts((prev) => prev.filter((t) => t.id !== toast.id))
                }
                className="ml-auto text-on-surface-variant hover:text-on-surface"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
