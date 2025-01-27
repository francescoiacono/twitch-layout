import { RoutesViewer } from "@/components/features/routes-viewer";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/twitch-layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Main Page</h1>
      <RoutesViewer />
      <Outlet />
    </div>
  );
}
