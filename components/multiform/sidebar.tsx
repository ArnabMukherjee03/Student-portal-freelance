import { Step } from "./step";

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex lg:w-[274px] lg:h-[550px] lg:flex-col lg:flex-shrink-0 rounded-lg lg:bg-[url('/images/bg-sidebar-desktop.svg')] lg:px-8 pt-10 lg:gap-8">
      <Step stepNumber={1} smallTitle="Step 1" sectionTitle="Your Info" />
      <Step stepNumber={2} smallTitle="Step 2" sectionTitle="Required Info" />
      <Step stepNumber={3} smallTitle="Step 3" sectionTitle="Employment History" />
      <Step stepNumber={4} smallTitle="Step 4" sectionTitle="Summary" />
    </aside>
  );
}