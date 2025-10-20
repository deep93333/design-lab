import {
  Button,
  CameraIcon,
  FilterIcon,
  GridIcon,
  ImageIcon,
  InboxIcon,
  LayoutHalfIcon,
  LinkIcon,
  MacintoshIcon,
  MoonIcon,
  PencilIcon,
  PlayIcon,
  PlusIcon,
  RecordIcon,
  SearchIcon,
  SunIcon,
  XIcon
} from "@deep-design-lab/ui";

import { motion } from "motion/react";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { cn } from "./utils";


type ActiveAction = "add" | "layout" | "filter" | "search" | "theme" | null;
type ViewMode = "list" | "grid";

export function FloatingActions() {
  const [activeElement, setActiveElement] = useState<ActiveAction>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [, setShowImagesGallery] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");

  const actionContentRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const containerStyle =
    "rounded-xl bg-[#fdfdfd] box-ring-shadow ring-[0.85px] ring-foreground/10";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen]);

  useLayoutEffect(() => {
    if (actionContentRef.current && contentRef.current && activeElement) {
      const { width, height } = contentRef.current.getBoundingClientRect();
      actionContentRef.current.style.height = activeElement
        ? `${height}px`
        : "0px";
      actionContentRef.current.style.width = activeElement
        ? `${width}px`
        : "0px";
      actionContentRef.current.style.padding = "4px";
    } else if (actionContentRef.current && !activeElement) {
      actionContentRef.current.style.height = "0px";
      actionContentRef.current.style.width = "0px";
      actionContentRef.current.style.boxShadow = "none";
      actionContentRef.current.style.padding = "0px";
    }
  }, [activeElement]);

  const renderActionContent = () => {
    switch (activeElement) {
      case "add":
        return (
          <div
            ref={contentRef}
            className="flex flex-col w-[240px] items-center justify-center"
          >
            <Button variant="ghost" className="group justify-start px-2 w-full">
              <PencilIcon className="size-5" />
              Note
            </Button>
            <Button variant="ghost" className="group justify-start px-2 w-full">
              <RecordIcon className="size-5" />
              Voice
            </Button>
            <Button variant="ghost" className="group justify-start px-2 w-full">
              <CameraIcon className="size-5" />
              Screenshot
            </Button>
          </div>
        );
      case "layout":
        return (
          <div
            ref={contentRef}
            className="flex flex-row items-center justify-center gap-0.5"
          >
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              className="group"
              onClick={() => setViewMode("list")}
            >
              <LayoutHalfIcon className="size-5" />
              List View
            </Button>
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              className="group"
              onClick={() => setViewMode("grid")}
            >
              <GridIcon className="size-5" />
              Grid View
            </Button>
          </div>
        );
      case "theme":
        return (
          <div
            ref={contentRef}
            className="flex flex-row items-center justify-center gap-0.5"
          >
            <Button
              variant={theme === "light" ? "secondary" : "ghost"}
              className="group"
              onClick={() => setTheme("light")}
            >
              <LayoutHalfIcon className="size-5" />
              Light
            </Button>
            <Button
              variant={theme === "dark" ? "secondary" : "ghost"}
              className="group"
              onClick={() => setTheme("dark")}
            >
              <GridIcon className="size-5" />
              Dark
            </Button>
            <Button
              variant={theme === "dark" ? "secondary" : "ghost"}
              className="group"
              onClick={() => setTheme("system")}
            >
              <MacintoshIcon className="size-5" />
              System
            </Button>
          </div>
        );
      case "search":
        return (
          <div
            ref={contentRef}
            className="flex flex-col w-[300px] items-center justify-center"
          >

            <div className="flex flex-col w-full items-center justify-center">
              <div className="h-[40px] w-full flex flex-row items-center justify-center px-2 relative">
                <SearchIcon className="!size-5 text-muted-foreground" />
                <input
                  className="flex-1 !text-base bg-transparent outline-none px-2 placeholder:text-foreground/30"
                  placeholder="Search notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search notes"
                />

                <Button
                  variant="ghost"
                  size="icon-xs"
                  className="rounded-full"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <XIcon className="!size-4" />
                </Button>
              </div>
            </div>

          </div>
        );
      case "filter":
        return (
          <div
            ref={contentRef}
            className="flex flex-col w-[240px] items-center justify-center"
          >
            <Button variant="ghost" className="group justify-start px-2 w-full">
              <InboxIcon className="size-5" />
              All Notes
            </Button>
            <Button
              variant="ghost"
              className="group justify-start px-2 w-full"
              onClick={() => setShowImagesGallery((v) => !v)}
            >
              <ImageIcon className="size-5" />
              Image
            </Button>
            <Button variant="ghost" className="group justify-start px-2 w-full">
              <PlayIcon className="size-5" />
              Video
            </Button>
            <Button variant="ghost" className="group justify-start px-2 w-full">
              <RecordIcon className="size-5" />
              Recording
            </Button>
            <Button variant="ghost" className="group justify-start px-2 w-full">
              <LinkIcon className="size-5" />
              Link
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  const isDarkMode = theme === "dark";

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-full pt-8 flex flex-col items-center gap-1 absolute z-[100] pointer-events-none justify-center bottom-0 pb-4">
        <div className="w-fit pointer-events-auto justify-center items-center h-fit p-1 flex flex-col gap-1">
          <div
            className={`flex flex-row justify-center pointer-events-auto ${containerStyle} ${activeElement ? "p-1" : ""}`}
          >
            <div
              className="flex flex-row pt-[2px] items-center justify-center overflow-hidden transition-all duration-[300ms] ease-in-out"
              ref={actionContentRef}
            >
              <motion.div
                key={activeElement ?? "none"}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                className="w-fit h-fit"
              >
                {renderActionContent()}
              </motion.div>
            </div>
          </div>
          <div
            className={cn(`w-fit pointer-events-auto h-fit p-1 gap-0.5 flex flex-row`, containerStyle)}
          >
            <Button
              variant={activeElement === "add" ? "secondary" : "ghost"}
              size="icon"
              className="group"
              onClick={() => setActiveElement("add")}
            >
              <PlusIcon className="size-5" />
            </Button>
            <Button
              variant={isSearchOpen ? "secondary" : "ghost"}
              size="icon"
              className="group"
              onClick={() => setActiveElement("search")}
            >
              <SearchIcon className="size-5" />
            </Button>
            <Button
              variant={activeElement === "layout" ? "secondary" : "ghost"}
              size="icon"
              className="group"
              onClick={() => setActiveElement("layout")}
            >
              {viewMode === "list" ? (
                <LayoutHalfIcon className="size-5" />
              ) : (
                <GridIcon className="size-5" />
              )}
            </Button>
            <Button
              variant={activeElement === "filter" ? "secondary" : "ghost"}
              size="icon"
              className="group"
              onClick={() => setActiveElement("filter")}
            >
              <FilterIcon className="size-5" />
            </Button>
            <Button
              variant={activeElement === "theme" ? "secondary" : "ghost"}
              size="icon"
              className="group"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveElement("theme");

              }}
            >
              {theme === "light" ? (
                <SunIcon className="size-5" />
              ) : theme === "system" ? (
                <MacintoshIcon className="size-5" />
              ) : (
                <MoonIcon className="size-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
