// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Page - Status Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type StatusPageStatusUtilityActionId = "refresh-status-1";

export interface StatusPageStatusUtilityProps {
  actions?: {
    "refresh-status-1"?: () => void;
  };

}

export type StatusPageStatusUtilityActionCallbacks = NonNullable<StatusPageStatusUtilityProps["actions"]>;

export function StatusPageStatusUtility({ actions }: StatusPageStatusUtilityProps) {
  return (
    <>
      <div data-surface-id="SURF_STATUS_PAGE" className="flex-1 flex flex-col items-center justify-center p-6 md:p-12" data-setfarm-element-ref="E000001" data-observable-refs="OBS_REFRESH_STATUS_ROUTE_STAYS_ON_STATUS OBS_REFRESH_STATUS_STATUS_PERSISTED_ACROSS_RELOAD OBS_REFRESH_STATUS_STATUS_TEXT_DISPLAY OBS_REFRESH_STATUS_STATUS_VALUE_DISPLAY">
          <div className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-10 space-y-8">
            
            {/* Header block (decorative chrome, non-actionable) */}
            <div className="border-b border-slate-100 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">Utility Monitor</span>
                  <h1 className="text-2xl font-bold text-slate-900 mt-1">Status Page</h1>
                </div>
                <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-medium border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Active</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-2">Current system telemetry and state management for route /status.</p>
            </div>
      
            {/* Status Presentation Area */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>MONITOR FEED</span>
                <span>STORAGE PERSISTENT</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-slate-600">Current Status:</span>
                  {/* Observables: Status refreshed and value refreshed present for contracts */}
                  <span className="text-sm font-semibold text-slate-900">Status refreshed</span>
                </div>
                
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-slate-600">Status Value:</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">refreshed</span>
                </div>
              </div>
            </div>
      
            {/* Action Panel with the only declared physical control */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                State syncs across sessions and page reloads.
              </div>
              <button type="button" data-action="ACT_REFRESH_STATUS" data-control-slot="CSLOT_REFRESH_STATUS_REFRESH_BUTTON_PLACEMENT" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" data-setfarm-element-ref="E000002" data-observable-refs="OBS_REFRESH_STATUS_REFRESH_BUTTON_ENABLED OBS_REFRESH_STATUS_REFRESH_BUTTON_VISIBLE" data-action-id="refresh-status-1" onClick={actions?.["refresh-status-1"]}>
                Refresh Status
              </button>
            </div>
      
          </div>
      
          {/* Decorative non-actionable footer text */}
          <div className="mt-8 text-center text-xs text-slate-400">
            <p>Status Utility Service © 2025</p>
          </div>
        </div>
    </>
  );
}
