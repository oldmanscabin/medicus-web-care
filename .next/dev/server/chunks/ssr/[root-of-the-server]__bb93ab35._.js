module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
;
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/ui/toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast,
    "ToastAction",
    ()=>ToastAction,
    "ToastClose",
    ()=>ToastClose,
    "ToastDescription",
    ()=>ToastDescription,
    "ToastProvider",
    ()=>ToastProvider,
    "ToastTitle",
    ()=>ToastTitle,
    "ToastViewport",
    ()=>ToastViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 44,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
});
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/toast.tsx",
            lineNumber: 76,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 85,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 93,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/src/components/ui/toaster.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toast.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Toaster() {
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 15,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 16,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/src/components/ui/toaster.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/toaster.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/toaster.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/sonner.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const Toaster = ({ ...props })=>{
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sonner.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
;
}),
"[project]/src/components/ui/sonner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sonner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Toaster"],
    "toast",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sonner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/sonner.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/src/lib/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    de: {
        // Navbar
        "nav.home": "STARTSEITE",
        "nav.services": "LEISTUNGEN",
        "nav.about": "ÜBER UNS",
        "nav.contact": "KONTAKT",
        "nav.bookNow": "JETZT BUCHEN",
        // Hero
        "hero.badge": "PROFESSIONELLER MEDIZINISCHER TRANSPORT",
        "hero.heading1": "Sicher, Zuverlässig",
        "hero.heading2": "Medizinische Betreuung",
        "hero.heading3": "Unterwegs",
        "hero.subtitle": "Professioneller Patiententransport mit Mitgefühl und Fachwissen. 24/7 verfügbar für alle Ihre medizinischen Transportbedürfnisse.",
        "hero.bookRide": "JETZT BUCHEN",
        // Services
        "services.title": "Unsere",
        "services.titleHighlight": "Leistungen",
        "services.subtitle": "Umfassende medizinische Transportlösungen für Ihre Bedürfnisse",
        "services.cta": "Jetzt anfragen",
        // Service categories
        "services.cat.medical": "Medizinischer Transport",
        "services.cat.hospital": "Krankenhaustransport",
        "services.cat.special": "Spezialtransport",
        "services.cat.private": "Privatfahrten",
        // Individual services
        "services.dialysis.title": "Dialysefahrten",
        "services.dialysis.desc": "Regelmäßige Fahrten zur Dialysebehandlung – zuverlässig und pünktlich.",
        "services.chemo.title": "Chemotherapie",
        "services.chemo.desc": "Sicherer Transport zu Ihrer Chemotherapiebehandlung.",
        "services.radiation.title": "Strahlentherapie",
        "services.radiation.desc": "Pünktliche Fahrten zu Bestrahlungsterminen.",
        "services.reha.title": "Reha-Fahrten",
        "services.reha.desc": "Transport zu Rehabilitationseinrichtungen.",
        "services.physio.title": "Physiotherapie",
        "services.physio.desc": "Fahrten zu Physiotherapie-Praxen.",
        "services.ergo.title": "Ergotherapie",
        "services.ergo.desc": "Transport zu ergotherapeutischen Behandlungen.",
        "services.logo.title": "Logotherapie",
        "services.logo.desc": "Fahrten zu Logopädie-Praxen.",
        "services.ambulatory.title": "Gehfähige Betreuung",
        "services.ambulatory.desc": "Betreuung bis zur Anmeldung in der Praxis.",
        "services.seniorCare.title": "Seniorenfahrten-Betreuung",
        "services.seniorCare.desc": "Betreuung für Fahrten zu Seniorenheimen.",
        "services.hospitalAdmission.title": "Krankenhauseinweisungen",
        "services.hospitalAdmission.desc": "Wir bringen Sie sicher ins Krankenhaus.",
        "services.hospitalDischarge.title": "Krankenhausentlassungen",
        "services.hospitalDischarge.desc": "Komfortabler Transport nach dem Klinikaufenthalt.",
        "services.wheelchair.title": "Rollstuhltransport",
        "services.wheelchair.desc": "Barrierefreier Transport für Rollstuhlfahrer.",
        "services.stretcher.title": "Liegendtransport",
        "services.stretcher.desc": "Sicherer Transport auf der Trage.",
        "services.daycare.title": "Tagespflege & Seniorenheime",
        "services.daycare.desc": "Tägliche Fahrten zu Pflegeeinrichtungen.",
        "services.doctor.title": "Arztbesuche",
        "services.doctor.desc": "Fahrten zu niedergelassenen Ärzten und Fachärzten.",
        "services.daily.title": "Alltägliche Fahrten",
        "services.daily.desc": "Unterstützung im Alltag durch bequemen Transport.",
        "services.kita.title": "Kitafahrten",
        "services.kita.desc": "Sicherer Transport für Kinder zu Kindertagesstätten.",
        "services.school.title": "Schulfahrten",
        "services.school.desc": "Zuverlässiger Transport für Schüler zur Schule.",
        // Why Medicus
        "why.title": "Warum",
        "why.titleHighlight": "Medicus",
        "why.subtitle": "Exzellenz im medizinischen Transport mit Fürsorge und Professionalität",
        "why.patients.stat": "500+",
        "why.patients.title": "Zufriedene Patienten",
        "why.patients.desc": "Vertrauen von hunderten zufriedener Kunden",
        "why.available.stat": "24/7",
        "why.available.title": "Verfügbar",
        "why.available.desc": "Rund um die Uhr Service, wenn Sie uns brauchen",
        "why.safety.stat": "100%",
        "why.safety.title": "Sicherheit zuerst",
        "why.safety.desc": "Zertifizierte medizinische Transportstandards",
        "why.experience.stat": "5+",
        "why.experience.title": "Jahre Erfahrung",
        "why.experience.desc": "Führender Anbieter für medizinischen Transport",
        // Testimonials
        "testimonials.title": "Was unsere",
        "testimonials.titleHighlight": "Patienten sagen",
        "testimonials.subtitle": "Lesen Sie Bewertungen von unseren zufriedenen Kunden",
        "testimonials.verified": "Verifizierter Patient",
        "testimonials.google": "Alle Bewertungen auf Google ansehen",
        "testimonials.t1": "Die Fahrer von Medicus sind immer freundlich und pünktlich. Ich fühle mich bei jeder Fahrt sicher und gut aufgehoben.",
        "testimonials.t2": "Seit wir Medicus nutzen, müssen wir uns keine Sorgen mehr um den Transport meiner Mutter machen. Ein wundervoller Service!",
        "testimonials.t3": "Professionell, einfühlsam und immer verlässlich. Medicus ist für uns die erste Wahl beim Krankentransport.",
        "testimonials.t4": "Sehr zuverlässig und kompetent. Das Team von Medicus hat unsere Erwartungen übertroffen.",
        "testimonials.t5": "Ich kann Medicus nur weiterempfehlen. Der Service ist hervorragend und die Fahrer sind sehr hilfsbereit.",
        "testimonials.t6": "Medicus hat meiner Familie sehr geholfen. Pünktlich, professionell und mit einem Lächeln.",
        // About
        "about.title": "Über",
        "about.titleHighlight": "Medicus",
        "about.subtitle": "Mehr als nur Transport – ein Engagement für Fürsorge",
        "about.whoWeAre": "Wer wir sind",
        "about.whoWeAreText": "Medicus ist ein spezialisierter medizinischer Transportdienst, der sich auf sicheren und komfortablen Transport für Patienten mit eingeschränkter Mobilität konzentriert. Wir verstehen, dass jeder Patient einzigartig ist und individuelle Bedürfnisse hat.",
        "about.mission": "Unsere Mission",
        "about.missionText": "Unser erfahrenes Team aus geschulten Fahrern begleitet Sie mit Einfühlungsvermögen und Professionalität. Ob regelmäßige Dialysefahrten, Krankenhausbesuche oder Therapietermine – wir sorgen dafür, dass Sie sicher und pünktlich ankommen.",
        "about.humanity": "Menschlichkeit",
        "about.humanityDesc": "Jeder Patient wird mit Respekt und Wärme behandelt.",
        "about.safety": "Sicherheit",
        "about.safetyDesc": "Höchste Sicherheitsstandards in jedem Fahrzeug.",
        "about.care": "Fürsorge",
        "about.careDesc": "Wir kümmern uns – nicht nur um den Transport, sondern um den Menschen.",
        "about.experience": "Erfahrung",
        "about.experienceDesc": "Langjährige Erfahrung im medizinischen Transportwesen.",
        // Booking
        "booking.title": "Buchen Sie Ihre",
        "booking.titleHighlight": "Fahrt",
        "booking.subtitle": "Wählen Sie Ihren Service, Datum und Uhrzeit für einen komfortablen medizinischen Transport",
        "booking.step1": "Service auswählen",
        "booking.step2": "Datum auswählen",
        "booking.step3": "Uhrzeit wählen",
        "booking.step4": "Ihre Angaben",
        "booking.service1": "Dialysefahrt / Krankenfahrt",
        "booking.service2": "Tagespflege / Seniorenheim",
        "booking.service3": "Privatfahrt",
        "booking.selected": "Ausgewählt",
        "booking.name": "Vollständiger Name",
        "booking.namePlaceholder": "Max Mustermann",
        "booking.phone": "Telefonnummer",
        "booking.phonePlaceholder": "+49 123 456789",
        "booking.notes": "Zusätzliche Hinweise",
        "booking.notesPlaceholder": "Besondere Wünsche oder Abholadresse...",
        "booking.submit": "Buchung bestätigen",
        "booking.summary": "Buchungsübersicht",
        "booking.callUs": "Rufen Sie uns an",
        "booking.hours": "Öffnungszeiten",
        "booking.hoursValue": "Mo–Fr: 6:00–20:00",
        "booking.needHelp": "Brauchen Sie Hilfe?",
        "booking.needHelpText": "Unser Team steht Ihnen gerne bei Fragen zu unseren Dienstleistungen zur Verfügung.",
        "booking.callNow": "Jetzt anrufen",
        "booking.missingInfo": "Fehlende Informationen",
        "booking.missingInfoDesc": "Bitte wählen Sie Datum, Uhrzeit und Service-Typ aus.",
        "booking.submitted": "Buchung übermittelt!",
        "booking.submittedDesc": "Wir werden uns in Kürze bei Ihnen melden, um Ihren Termin zu bestätigen.",
        // CTA
        "cta.title": "Wir sind für Sie da",
        "cta.subtitle": "Buchen Sie Ihre nächste Fahrt oder rufen Sie uns an – schnell, einfach und sicher.",
        "cta.book": "Fahrt buchen",
        // Footer
        "footer.desc": "Ihr zuverlässiger Partner für sicheren und komfortablen medizinischen Transport.",
        "footer.quickLinks": "Schnellzugriff",
        "footer.home": "Startseite",
        "footer.servicesLink": "Leistungen",
        "footer.aboutLink": "Über uns",
        "footer.contactLink": "Kontakt",
        "footer.ourServices": "Unsere Leistungen",
        "footer.dialysis": "Dialysetransport",
        "footer.daycare": "Tagespflege-Service",
        "footer.private": "Privattransport",
        "footer.hospital": "Krankenhaustransfer",
        "footer.contact": "Kontakt",
        "footer.phone": "Telefon",
        "footer.email": "Email",
        "footer.address": "Adresse",
        "footer.hours": "Öffnungszeiten",
        "footer.hoursValue": "Mo–Fr: 6:00–20:00",
        "footer.copyright": "Medicus Dienstleistungen GmbH. Alle Rechte vorbehalten.",
        "footer.privacy": "Datenschutz",
        "footer.imprint": "Impressum",
        // Cookie Banner
        "cookie.title": "Wir verwenden Cookies",
        "cookie.text": "Wir verwenden Cookies und ähnliche Technologien, um Ihnen das beste Erlebnis auf unserer Website zu bieten. Einige sind notwendig für den Betrieb der Seite, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern. Sie können wählen, welche Kategorien Sie zulassen möchten.",
        "cookie.learnMore": "Mehr erfahren",
        "cookie.settings": "Einstellungen",
        "cookie.reject": "Ablehnen",
        "cookie.acceptAll": "Alle akzeptieren",
        "cookie.settingsTitle": "Cookie-Einstellungen",
        "cookie.settingsSubtitle": "Verwalten Sie Ihre Cookie-Präferenzen",
        "cookie.necessary": "Notwendige Cookies",
        "cookie.necessaryDesc": "Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden.",
        "cookie.preferences": "Präferenz-Cookies",
        "cookie.preferencesDesc": "Diese Cookies ermöglichen es der Website, sich an von Ihnen getroffene Entscheidungen zu erinnern.",
        "cookie.statistics": "Statistik-Cookies",
        "cookie.statisticsDesc": "Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.",
        "cookie.marketing": "Marketing-Cookies",
        "cookie.marketingDesc": "Diese Cookies werden verwendet, um Besuchern auf Webseiten zu folgen.",
        "cookie.alwaysActive": "Immer aktiv",
        "cookie.examples": "Beispiele",
        "cookie.rejectAll": "Alle ablehnen",
        "cookie.saveSelection": "Auswahl speichern",
        "cookie.notice": "Durch das Ablehnen von Cookies kann die Funktionalität der Website beeinträchtigt werden.",
        // Language Selector
        "lang.continue": "Fortfahren",
        "lang.note": "Die Website ist auf Deutsch verfügbar."
    },
    en: {
        // Navbar
        "nav.home": "HOME",
        "nav.services": "SERVICES",
        "nav.about": "ABOUT US",
        "nav.contact": "CONTACT",
        "nav.bookNow": "BOOK NOW",
        // Hero
        "hero.badge": "PROFESSIONAL MEDICAL TRANSPORT",
        "hero.heading1": "Safe, Reliable",
        "hero.heading2": "Medical Care",
        "hero.heading3": "On The Move",
        "hero.subtitle": "Professional patient transport with compassion and expertise. Available 24/7 for all your medical transportation needs.",
        "hero.bookRide": "BOOK NOW",
        // Services
        "services.title": "Our",
        "services.titleHighlight": "Services",
        "services.subtitle": "Comprehensive medical transport solutions for your needs",
        "services.cta": "Request Service",
        "services.cat.medical": "Medical Transport",
        "services.cat.hospital": "Hospital Transport",
        "services.cat.special": "Special Transport",
        "services.cat.private": "Private Rides",
        "services.dialysis.title": "Dialysis Rides",
        "services.dialysis.desc": "Regular rides to dialysis treatment – reliable and on time.",
        "services.chemo.title": "Chemotherapy",
        "services.chemo.desc": "Safe transport to your chemotherapy treatment.",
        "services.radiation.title": "Radiation Therapy",
        "services.radiation.desc": "Punctual rides to radiation appointments.",
        "services.reha.title": "Rehabilitation Rides",
        "services.reha.desc": "Transport to rehabilitation facilities.",
        "services.physio.title": "Physiotherapy",
        "services.physio.desc": "Rides to physiotherapy clinics.",
        "services.ergo.title": "Occupational Therapy",
        "services.ergo.desc": "Transport to occupational therapy treatments.",
        "services.logo.title": "Speech Therapy",
        "services.logo.desc": "Rides to speech therapy clinics.",
        "services.ambulatory.title": "Ambulatory Care",
        "services.ambulatory.desc": "Support up to registration at the clinic.",
        "services.seniorCare.title": "Senior Care Rides",
        "services.seniorCare.desc": "Care for rides to nursing homes.",
        "services.hospitalAdmission.title": "Hospital Admissions",
        "services.hospitalAdmission.desc": "We take you safely to the hospital.",
        "services.hospitalDischarge.title": "Hospital Discharges",
        "services.hospitalDischarge.desc": "Comfortable transport after your hospital stay.",
        "services.wheelchair.title": "Wheelchair Transport",
        "services.wheelchair.desc": "Accessible transport for wheelchair users.",
        "services.stretcher.title": "Stretcher Transport",
        "services.stretcher.desc": "Safe transport on a stretcher.",
        "services.daycare.title": "Day Care & Nursing Homes",
        "services.daycare.desc": "Daily rides to care facilities.",
        "services.doctor.title": "Doctor Visits",
        "services.doctor.desc": "Rides to doctors and specialists.",
        "services.daily.title": "Daily Rides",
        "services.daily.desc": "Support in daily life with comfortable transport.",
        "services.kita.title": "Kindergarten Transport",
        "services.kita.desc": "Safe transport for children to kindergartens.",
        "services.school.title": "School Transport",
        "services.school.desc": "Reliable transport for students to school.",
        // Why Medicus
        "why.title": "Why",
        "why.titleHighlight": "Medicus",
        "why.subtitle": "Excellence in medical transport with care and professionalism",
        "why.patients.stat": "500+",
        "why.patients.title": "Satisfied Patients",
        "why.patients.desc": "Trusted by hundreds of satisfied clients",
        "why.available.stat": "24/7",
        "why.available.title": "Available",
        "why.available.desc": "Round-the-clock service when you need us",
        "why.safety.stat": "100%",
        "why.safety.title": "Safety First",
        "why.safety.desc": "Certified medical transport standards",
        "why.experience.stat": "5+",
        "why.experience.title": "Years Experience",
        "why.experience.desc": "Leading provider of medical transport",
        // Testimonials
        "testimonials.title": "What Our",
        "testimonials.titleHighlight": "Patients Say",
        "testimonials.subtitle": "Read reviews from our satisfied clients",
        "testimonials.verified": "Verified Patient",
        "testimonials.google": "See all reviews on Google",
        "testimonials.t1": "The drivers at Medicus are always friendly and punctual. I feel safe and well cared for on every ride.",
        "testimonials.t2": "Since we started using Medicus, we no longer worry about my mother's transport. A wonderful service!",
        "testimonials.t3": "Professional, empathetic and always reliable. Medicus is our first choice for medical transport.",
        "testimonials.t4": "Very reliable and competent. The Medicus team exceeded our expectations.",
        "testimonials.t5": "I can only recommend Medicus. The service is excellent and the drivers are very helpful.",
        "testimonials.t6": "Medicus has helped my family a lot. Punctual, professional and with a smile.",
        // About
        "about.title": "About",
        "about.titleHighlight": "Medicus",
        "about.subtitle": "More than transport – a commitment to care",
        "about.whoWeAre": "Who We Are",
        "about.whoWeAreText": "Medicus is a specialized medical transport service focused on safe and comfortable transport for patients with limited mobility. We understand that every patient is unique and has individual needs.",
        "about.mission": "Our Mission",
        "about.missionText": "Our experienced team of trained drivers accompanies you with empathy and professionalism. Whether regular dialysis rides, hospital visits or therapy appointments – we ensure you arrive safely and on time.",
        "about.humanity": "Humanity",
        "about.humanityDesc": "Every patient is treated with respect and warmth.",
        "about.safety": "Safety",
        "about.safetyDesc": "Highest safety standards in every vehicle.",
        "about.care": "Care",
        "about.careDesc": "We care – not just about transport, but about the person.",
        "about.experience": "Experience",
        "about.experienceDesc": "Years of experience in medical transport.",
        // Booking
        "booking.title": "Book Your",
        "booking.titleHighlight": "Ride",
        "booking.subtitle": "Choose your service, date and time for comfortable medical transport",
        "booking.step1": "Select Service",
        "booking.step2": "Select Date",
        "booking.step3": "Select Time",
        "booking.step4": "Your Details",
        "booking.service1": "Dialysis / Patient Ride",
        "booking.service2": "Day Care / Nursing Home",
        "booking.service3": "Private Ride",
        "booking.selected": "Selected",
        "booking.name": "Full Name",
        "booking.namePlaceholder": "John Doe",
        "booking.phone": "Phone Number",
        "booking.phonePlaceholder": "+49 123 456789",
        "booking.notes": "Additional Notes",
        "booking.notesPlaceholder": "Special requests or pickup address...",
        "booking.submit": "Confirm Booking",
        "booking.summary": "Booking Summary",
        "booking.callUs": "Call Us",
        "booking.hours": "Opening Hours",
        "booking.hoursValue": "Mon–Fri: 6:00–20:00",
        "booking.needHelp": "Need Help?",
        "booking.needHelpText": "Our team is happy to assist you with any questions about our services.",
        "booking.callNow": "Call Now",
        "booking.missingInfo": "Missing Information",
        "booking.missingInfoDesc": "Please select date, time and service type.",
        "booking.submitted": "Booking Submitted!",
        "booking.submittedDesc": "We will contact you shortly to confirm your appointment.",
        // CTA
        "cta.title": "We Are Here For You",
        "cta.subtitle": "Book your next ride or call us – quick, easy and safe.",
        "cta.book": "Book a Ride",
        // Footer
        "footer.desc": "Your reliable partner for safe and comfortable medical transport.",
        "footer.quickLinks": "Quick Links",
        "footer.home": "Home",
        "footer.servicesLink": "Services",
        "footer.aboutLink": "About Us",
        "footer.contactLink": "Contact",
        "footer.ourServices": "Our Services",
        "footer.dialysis": "Dialysis Transport",
        "footer.daycare": "Day Care Service",
        "footer.private": "Private Transport",
        "footer.hospital": "Hospital Transfer",
        "footer.contact": "Contact",
        "footer.phone": "Phone",
        "footer.email": "Email",
        "footer.address": "Address",
        "footer.hours": "Opening Hours",
        "footer.hoursValue": "Mon–Fri: 6:00–20:00",
        "footer.copyright": "Medicus Dienstleistungen GmbH. All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.imprint": "Imprint",
        // Cookie Banner
        "cookie.title": "We Use Cookies",
        "cookie.text": "We use cookies and similar technologies to give you the best experience on our website. Some are necessary for the site to function, while others help us improve this website and your experience. You can choose which categories to allow.",
        "cookie.learnMore": "Learn more",
        "cookie.settings": "Settings",
        "cookie.reject": "Reject",
        "cookie.acceptAll": "Accept All",
        "cookie.settingsTitle": "Cookie Settings",
        "cookie.settingsSubtitle": "Manage your cookie preferences",
        "cookie.necessary": "Necessary Cookies",
        "cookie.necessaryDesc": "These cookies are required for the website to function and cannot be disabled.",
        "cookie.preferences": "Preference Cookies",
        "cookie.preferencesDesc": "These cookies allow the website to remember choices you have made.",
        "cookie.statistics": "Statistics Cookies",
        "cookie.statisticsDesc": "These cookies help us understand how visitors interact with the website.",
        "cookie.marketing": "Marketing Cookies",
        "cookie.marketingDesc": "These cookies are used to track visitors across websites.",
        "cookie.alwaysActive": "Always Active",
        "cookie.examples": "Examples",
        "cookie.rejectAll": "Reject All",
        "cookie.saveSelection": "Save Selection",
        "cookie.notice": "Rejecting cookies may affect the functionality of the website.",
        // Language Selector
        "lang.continue": "Continue",
        "lang.note": "Multi-language support available."
    },
    ar: {
        // Navbar
        "nav.home": "الرئيسية",
        "nav.services": "الخدمات",
        "nav.about": "من نحن",
        "nav.contact": "اتصل بنا",
        "nav.bookNow": "احجز الآن",
        // Hero
        "hero.badge": "خدمات النقل الطبي المتخصصة",
        "hero.heading1": "آمن، موثوق",
        "hero.heading2": "رعاية طبية",
        "hero.heading3": "أثناء التنقل",
        "hero.subtitle": "نقل مرضى احترافي بتعاطف وخبرة. متاح على مدار الساعة طوال أيام الأسبوع لجميع احتياجات النقل الطبي الخاصة بك.",
        "hero.bookRide": "احجز الآن",
        // Services
        "services.title": "خدماتنا",
        "services.titleHighlight": "",
        "services.subtitle": "حلول نقل طبي شاملة لاحتياجاتك",
        "services.cta": "اطلب الخدمة",
        "services.cat.medical": "النقل الطبي",
        "services.cat.hospital": "نقل المستشفيات",
        "services.cat.special": "النقل المتخصص",
        "services.cat.private": "الرحلات الخاصة",
        "services.dialysis.title": "رحلات غسيل الكلى",
        "services.dialysis.desc": "رحلات منتظمة لعلاج غسيل الكلى – موثوقة ودقيقة.",
        "services.chemo.title": "العلاج الكيميائي",
        "services.chemo.desc": "نقل آمن لعلاج الكيميائي الخاص بك.",
        "services.radiation.title": "العلاج الإشعاعي",
        "services.radiation.desc": "رحلات دقيقة لمواعيد العلاج الإشعاعي.",
        "services.reha.title": "رحلات إعادة التأهيل",
        "services.reha.desc": "النقل إلى مرافق إعادة التأهيل.",
        "services.physio.title": "العلاج الطبيعي",
        "services.physio.desc": "رحلات إلى عيادات العلاج الطبيعي.",
        "services.ergo.title": "العلاج الوظيفي",
        "services.ergo.desc": "النقل إلى جلسات العلاج الوظيفي.",
        "services.logo.title": "علاج النطق",
        "services.logo.desc": "رحلات إلى عيادات علاج النطق.",
        "services.ambulatory.title": "الرعاية المتنقلة",
        "services.ambulatory.desc": "الدعم حتى التسجيل في العيادة.",
        "services.seniorCare.title": "رحلات رعاية المسنين",
        "services.seniorCare.desc": "رعاية للرحلات إلى دور المسنين.",
        "services.hospitalAdmission.title": "دخول المستشفى",
        "services.hospitalAdmission.desc": "ننقلك بأمان إلى المستشفى.",
        "services.hospitalDischarge.title": "خروج من المستشفى",
        "services.hospitalDischarge.desc": "نقل مريح بعد إقامتك في المستشفى.",
        "services.wheelchair.title": "نقل الكراسي المتحركة",
        "services.wheelchair.desc": "نقل متاح لمستخدمي الكراسي المتحركة.",
        "services.stretcher.title": "نقل على نقالة",
        "services.stretcher.desc": "نقل آمن على نقالة.",
        "services.daycare.title": "الرعاية النهارية ودور الرعاية",
        "services.daycare.desc": "رحلات يومية إلى مرافق الرعاية.",
        "services.doctor.title": "زيارات الطبيب",
        "services.doctor.desc": "رحلات إلى الأطباء والمتخصصين.",
        "services.daily.title": "رحلات يومية",
        "services.daily.desc": "دعم في الحياة اليومية بنقل مريح.",
        "services.kita.title": "نقل روضة الأطفال",
        "services.kita.desc": "نقل آمن للأطفال إلى رياض الأطفال.",
        "services.school.title": "نقل المدرسة",
        "services.school.desc": "نقل موثوق للطلاب إلى المدرسة.",
        // Why Medicus
        "why.title": "لماذا",
        "why.titleHighlight": "ميديكوس",
        "why.subtitle": "التميز في النقل الطبي بالرعاية والاحترافية",
        "why.patients.stat": "+500",
        "why.patients.title": "مريض راضٍ",
        "why.patients.desc": "موثوق من مئات العملاء الراضين",
        "why.available.stat": "24/7",
        "why.available.title": "متاح",
        "why.available.desc": "خدمة على مدار الساعة عندما تحتاجنا",
        "why.safety.stat": "100%",
        "why.safety.title": "السلامة أولاً",
        "why.safety.desc": "معايير نقل طبي معتمدة",
        "why.experience.stat": "+5",
        "why.experience.title": "سنوات خبرة",
        "why.experience.desc": "مزود رائد في النقل الطبي",
        // Testimonials
        "testimonials.title": "ماذا يقول",
        "testimonials.titleHighlight": "مرضانا",
        "testimonials.subtitle": "اقرأ تقييمات عملائنا الراضين",
        "testimonials.verified": "مريض موثق",
        "testimonials.google": "شاهد جميع التقييمات على جوجل",
        "testimonials.t1": "سائقو ميديكوس دائماً ودودون ودقيقون في المواعيد. أشعر بالأمان والراحة في كل رحلة.",
        "testimonials.t2": "منذ أن بدأنا باستخدام ميديكوس، لم نعد نقلق بشأن نقل والدتي. خدمة رائعة!",
        "testimonials.t3": "احترافية وتعاطف وموثوقية دائمة. ميديكوس هو خيارنا الأول في النقل الطبي.",
        "testimonials.t4": "موثوق جداً وكفؤ. فريق ميديكوس تجاوز توقعاتنا.",
        "testimonials.t5": "أوصي بشدة بميديكوس. الخدمة ممتازة والسائقون مفيدون جداً.",
        "testimonials.t6": "ميديكوس ساعد عائلتي كثيراً. دقة ومهنية وبابتسامة.",
        // About
        "about.title": "عن",
        "about.titleHighlight": "ميديكوس",
        "about.subtitle": "أكثر من مجرد نقل – التزام بالرعاية",
        "about.whoWeAre": "من نحن",
        "about.whoWeAreText": "ميديكوس هي خدمة نقل طبي متخصصة تركز على النقل الآمن والمريح للمرضى ذوي القدرة المحدودة على الحركة. نحن نفهم أن كل مريض فريد وله احتياجات فردية.",
        "about.mission": "مهمتنا",
        "about.missionText": "فريقنا ذو الخبرة من السائقين المدربين يرافقك بتعاطف واحترافية. سواء رحلات غسيل الكلى المنتظمة أو زيارات المستشفى أو مواعيد العلاج – نضمن وصولك بأمان وفي الوقت المحدد.",
        "about.humanity": "الإنسانية",
        "about.humanityDesc": "كل مريض يُعامل باحترام ودفء.",
        "about.safety": "السلامة",
        "about.safetyDesc": "أعلى معايير السلامة في كل مركبة.",
        "about.care": "الرعاية",
        "about.careDesc": "نحن نهتم – ليس فقط بالنقل بل بالإنسان.",
        "about.experience": "الخبرة",
        "about.experienceDesc": "سنوات طويلة من الخبرة في النقل الطبي.",
        // Booking
        "booking.title": "احجز",
        "booking.titleHighlight": "رحلتك",
        "booking.subtitle": "اختر خدمتك والتاريخ والوقت لنقل طبي مريح",
        "booking.step1": "اختر الخدمة",
        "booking.step2": "اختر التاريخ",
        "booking.step3": "اختر الوقت",
        "booking.step4": "بياناتك",
        "booking.service1": "غسيل الكلى / نقل مرضى",
        "booking.service2": "رعاية نهارية / دار رعاية",
        "booking.service3": "رحلة خاصة",
        "booking.selected": "مختار",
        "booking.name": "الاسم الكامل",
        "booking.namePlaceholder": "محمد أحمد",
        "booking.phone": "رقم الهاتف",
        "booking.phonePlaceholder": "+49 123 456789",
        "booking.notes": "ملاحظات إضافية",
        "booking.notesPlaceholder": "طلبات خاصة أو عنوان الاستلام...",
        "booking.submit": "تأكيد الحجز",
        "booking.summary": "ملخص الحجز",
        "booking.callUs": "اتصل بنا",
        "booking.hours": "ساعات العمل",
        "booking.hoursValue": "الإثنين–الجمعة: 6:00–20:00",
        "booking.needHelp": "هل تحتاج مساعدة؟",
        "booking.needHelpText": "فريقنا سعيد بمساعدتك في أي أسئلة حول خدماتنا.",
        "booking.callNow": "اتصل الآن",
        "booking.missingInfo": "معلومات ناقصة",
        "booking.missingInfoDesc": "يرجى اختيار التاريخ والوقت ونوع الخدمة.",
        "booking.submitted": "تم تقديم الحجز!",
        "booking.submittedDesc": "سنتصل بك قريباً لتأكيد موعدك.",
        // CTA
        "cta.title": "نحن هنا من أجلك",
        "cta.subtitle": "احجز رحلتك القادمة أو اتصل بنا – سريع وسهل وآمن.",
        "cta.book": "احجز رحلة",
        // Footer
        "footer.desc": "شريكك الموثوق للنقل الطبي الآمن والمريح.",
        "footer.quickLinks": "روابط سريعة",
        "footer.home": "الرئيسية",
        "footer.servicesLink": "الخدمات",
        "footer.aboutLink": "من نحن",
        "footer.contactLink": "اتصل بنا",
        "footer.ourServices": "خدماتنا",
        "footer.dialysis": "نقل غسيل الكلى",
        "footer.daycare": "خدمة الرعاية النهارية",
        "footer.private": "النقل الخاص",
        "footer.hospital": "نقل المستشفيات",
        "footer.contact": "اتصل بنا",
        "footer.phone": "الهاتف",
        "footer.email": "البريد الإلكتروني",
        "footer.address": "العنوان",
        "footer.hours": "ساعات العمل",
        "footer.hoursValue": "الإثنين–الجمعة: 6:00–20:00",
        "footer.copyright": "Medicus Dienstleistungen GmbH. جميع الحقوق محفوظة.",
        "footer.privacy": "سياسة الخصوصية",
        "footer.imprint": "البصمة القانونية",
        // Cookie Banner
        "cookie.title": "نحن نستخدم الكوكيز",
        "cookie.text": "نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لنقدم لك أفضل تجربة على موقعنا. بعضها ضروري لعمل الموقع، بينما يساعدنا البعض الآخر في تحسين هذا الموقع وتجربتك. يمكنك اختيار الفئات المسموح بها.",
        "cookie.learnMore": "اعرف المزيد",
        "cookie.settings": "الإعدادات",
        "cookie.reject": "رفض",
        "cookie.acceptAll": "قبول الكل",
        "cookie.settingsTitle": "إعدادات الكوكيز",
        "cookie.settingsSubtitle": "إدارة تفضيلات الكوكيز الخاصة بك",
        "cookie.necessary": "الكوكيز الضرورية",
        "cookie.necessaryDesc": "هذه الكوكيز مطلوبة لعمل الموقع ولا يمكن تعطيلها.",
        "cookie.preferences": "كوكيز التفضيلات",
        "cookie.preferencesDesc": "هذه الكوكيز تسمح للموقع بتذكر اختياراتك.",
        "cookie.statistics": "كوكيز الإحصائيات",
        "cookie.statisticsDesc": "هذه الكوكيز تساعدنا في فهم كيفية تفاعل الزوار مع الموقع.",
        "cookie.marketing": "كوكيز التسويق",
        "cookie.marketingDesc": "تُستخدم هذه الكوكيز لتتبع الزوار عبر المواقع.",
        "cookie.alwaysActive": "نشط دائماً",
        "cookie.examples": "أمثلة",
        "cookie.rejectAll": "رفض الكل",
        "cookie.saveSelection": "حفظ الاختيار",
        "cookie.notice": "قد يؤثر رفض الكوكيز على وظائف الموقع.",
        // Language Selector
        "lang.continue": "متابعة",
        "lang.note": "الموقع متاح بعدة لغات."
    },
    fr: {
        // Navbar
        "nav.home": "ACCUEIL",
        "nav.services": "SERVICES",
        "nav.about": "À PROPOS",
        "nav.contact": "CONTACT",
        "nav.bookNow": "RÉSERVER",
        // Hero
        "hero.badge": "TRANSPORT MÉDICAL PROFESSIONNEL",
        "hero.heading1": "Sûr, Fiable",
        "hero.heading2": "Soins Médicaux",
        "hero.heading3": "En Déplacement",
        "hero.subtitle": "Transport de patients professionnel avec compassion et expertise. Disponible 24h/24 et 7j/7 pour tous vos besoins de transport médical.",
        "hero.bookRide": "RÉSERVER",
        // Services
        "services.title": "Nos",
        "services.titleHighlight": "Services",
        "services.subtitle": "Solutions complètes de transport médical pour vos besoins",
        "services.cta": "Demander un service",
        "services.cat.medical": "Transport Médical",
        "services.cat.hospital": "Transport Hospitalier",
        "services.cat.special": "Transport Spécialisé",
        "services.cat.private": "Trajets Privés",
        "services.dialysis.title": "Trajets Dialyse",
        "services.dialysis.desc": "Trajets réguliers pour la dialyse – fiables et ponctuels.",
        "services.chemo.title": "Chimiothérapie",
        "services.chemo.desc": "Transport sûr pour votre chimiothérapie.",
        "services.radiation.title": "Radiothérapie",
        "services.radiation.desc": "Trajets ponctuels pour les rendez-vous de radiothérapie.",
        "services.reha.title": "Trajets Rééducation",
        "services.reha.desc": "Transport vers les centres de rééducation.",
        "services.physio.title": "Kinésithérapie",
        "services.physio.desc": "Trajets vers les cabinets de kinésithérapie.",
        "services.ergo.title": "Ergothérapie",
        "services.ergo.desc": "Transport pour les séances d'ergothérapie.",
        "services.logo.title": "Orthophonie",
        "services.logo.desc": "Trajets vers les cabinets d'orthophonie.",
        "services.ambulatory.title": "Soins Ambulatoires",
        "services.ambulatory.desc": "Accompagnement jusqu'à l'enregistrement au cabinet.",
        "services.seniorCare.title": "Transport Seniors",
        "services.seniorCare.desc": "Accompagnement pour les trajets vers les maisons de retraite.",
        "services.hospitalAdmission.title": "Admissions Hospitalières",
        "services.hospitalAdmission.desc": "Nous vous emmenons en toute sécurité à l'hôpital.",
        "services.hospitalDischarge.title": "Sorties d'Hôpital",
        "services.hospitalDischarge.desc": "Transport confortable après votre séjour hospitalier.",
        "services.wheelchair.title": "Transport Fauteuil Roulant",
        "services.wheelchair.desc": "Transport accessible pour les utilisateurs de fauteuils roulants.",
        "services.stretcher.title": "Transport sur Brancard",
        "services.stretcher.desc": "Transport sûr sur brancard.",
        "services.daycare.title": "Accueil de Jour & Maisons de Retraite",
        "services.daycare.desc": "Trajets quotidiens vers les établissements de soins.",
        "services.doctor.title": "Visites Médicales",
        "services.doctor.desc": "Trajets chez les médecins et spécialistes.",
        "services.daily.title": "Trajets Quotidiens",
        "services.daily.desc": "Aide au quotidien avec un transport confortable.",
        "services.kita.title": "Transport Maternelle",
        "services.kita.desc": "Transport sûr pour les enfants vers les jardins d'enfants.",
        "services.school.title": "Transport Scolaire",
        "services.school.desc": "Transport fiable pour les élèves vers l'école.",
        // Why Medicus
        "why.title": "Pourquoi",
        "why.titleHighlight": "Medicus",
        "why.subtitle": "Excellence dans le transport médical avec soin et professionnalisme",
        "why.patients.stat": "500+",
        "why.patients.title": "Patients Satisfaits",
        "why.patients.desc": "La confiance de centaines de clients satisfaits",
        "why.available.stat": "24/7",
        "why.available.title": "Disponible",
        "why.available.desc": "Service 24h/24 quand vous avez besoin de nous",
        "why.safety.stat": "100%",
        "why.safety.title": "Sécurité d'Abord",
        "why.safety.desc": "Normes certifiées de transport médical",
        "why.experience.stat": "5+",
        "why.experience.title": "Années d'Expérience",
        "why.experience.desc": "Leader du transport médical",
        // Testimonials
        "testimonials.title": "Ce que disent nos",
        "testimonials.titleHighlight": "Patients",
        "testimonials.subtitle": "Lisez les avis de nos clients satisfaits",
        "testimonials.verified": "Patient Vérifié",
        "testimonials.google": "Voir tous les avis sur Google",
        "testimonials.t1": "Les chauffeurs de Medicus sont toujours aimables et ponctuels. Je me sens en sécurité et bien pris en charge à chaque trajet.",
        "testimonials.t2": "Depuis que nous utilisons Medicus, nous ne nous inquiétons plus pour le transport de ma mère. Un service merveilleux !",
        "testimonials.t3": "Professionnel, empathique et toujours fiable. Medicus est notre premier choix pour le transport médical.",
        "testimonials.t4": "Très fiable et compétent. L'équipe Medicus a dépassé nos attentes.",
        "testimonials.t5": "Je ne peux que recommander Medicus. Le service est excellent et les chauffeurs très serviables.",
        "testimonials.t6": "Medicus a beaucoup aidé ma famille. Ponctuel, professionnel et avec le sourire.",
        // About
        "about.title": "À Propos de",
        "about.titleHighlight": "Medicus",
        "about.subtitle": "Plus qu'un transport – un engagement pour les soins",
        "about.whoWeAre": "Qui Sommes-Nous",
        "about.whoWeAreText": "Medicus est un service de transport médical spécialisé dans le transport sûr et confortable des patients à mobilité réduite. Nous comprenons que chaque patient est unique et a des besoins individuels.",
        "about.mission": "Notre Mission",
        "about.missionText": "Notre équipe expérimentée de chauffeurs formés vous accompagne avec empathie et professionnalisme. Que ce soient des trajets réguliers de dialyse, des visites à l'hôpital ou des rendez-vous de thérapie – nous assurons que vous arrivez en toute sécurité et à l'heure.",
        "about.humanity": "Humanité",
        "about.humanityDesc": "Chaque patient est traité avec respect et chaleur.",
        "about.safety": "Sécurité",
        "about.safetyDesc": "Les plus hauts standards de sécurité dans chaque véhicule.",
        "about.care": "Soins",
        "about.careDesc": "Nous prenons soin – pas seulement du transport, mais de la personne.",
        "about.experience": "Expérience",
        "about.experienceDesc": "Des années d'expérience dans le transport médical.",
        // Booking
        "booking.title": "Réservez Votre",
        "booking.titleHighlight": "Trajet",
        "booking.subtitle": "Choisissez votre service, date et heure pour un transport médical confortable",
        "booking.step1": "Choisir le Service",
        "booking.step2": "Choisir la Date",
        "booking.step3": "Choisir l'Heure",
        "booking.step4": "Vos Coordonnées",
        "booking.service1": "Dialyse / Transport Patient",
        "booking.service2": "Accueil de Jour / Maison de Retraite",
        "booking.service3": "Trajet Privé",
        "booking.selected": "Sélectionné",
        "booking.name": "Nom Complet",
        "booking.namePlaceholder": "Jean Dupont",
        "booking.phone": "Numéro de Téléphone",
        "booking.phonePlaceholder": "+49 123 456789",
        "booking.notes": "Notes Supplémentaires",
        "booking.notesPlaceholder": "Demandes spéciales ou adresse de prise en charge...",
        "booking.submit": "Confirmer la Réservation",
        "booking.summary": "Résumé de la Réservation",
        "booking.callUs": "Appelez-Nous",
        "booking.hours": "Heures d'Ouverture",
        "booking.hoursValue": "Lun–Ven: 6:00–20:00",
        "booking.needHelp": "Besoin d'Aide ?",
        "booking.needHelpText": "Notre équipe se fera un plaisir de répondre à vos questions sur nos services.",
        "booking.callNow": "Appeler Maintenant",
        "booking.missingInfo": "Informations Manquantes",
        "booking.missingInfoDesc": "Veuillez sélectionner la date, l'heure et le type de service.",
        "booking.submitted": "Réservation Envoyée !",
        "booking.submittedDesc": "Nous vous contacterons prochainement pour confirmer votre rendez-vous.",
        // CTA
        "cta.title": "Nous Sommes Là Pour Vous",
        "cta.subtitle": "Réservez votre prochain trajet ou appelez-nous – rapide, simple et sûr.",
        "cta.book": "Réserver un Trajet",
        // Footer
        "footer.desc": "Votre partenaire fiable pour un transport médical sûr et confortable.",
        "footer.quickLinks": "Liens Rapides",
        "footer.home": "Accueil",
        "footer.servicesLink": "Services",
        "footer.aboutLink": "À Propos",
        "footer.contactLink": "Contact",
        "footer.ourServices": "Nos Services",
        "footer.dialysis": "Transport Dialyse",
        "footer.daycare": "Service Accueil de Jour",
        "footer.private": "Transport Privé",
        "footer.hospital": "Transfert Hospitalier",
        "footer.contact": "Contact",
        "footer.phone": "Téléphone",
        "footer.email": "Email",
        "footer.address": "Adresse",
        "footer.hours": "Heures d'Ouverture",
        "footer.hoursValue": "Lun–Ven: 6:00–20:00",
        "footer.copyright": "Medicus Dienstleistungen GmbH. Tous droits réservés.",
        "footer.privacy": "Politique de Confidentialité",
        "footer.imprint": "Mentions Légales",
        // Cookie Banner
        "cookie.title": "Nous Utilisons des Cookies",
        "cookie.text": "Nous utilisons des cookies et des technologies similaires pour vous offrir la meilleure expérience sur notre site. Certains sont nécessaires au fonctionnement du site, tandis que d'autres nous aident à améliorer ce site et votre expérience. Vous pouvez choisir les catégories à autoriser.",
        "cookie.learnMore": "En savoir plus",
        "cookie.settings": "Paramètres",
        "cookie.reject": "Refuser",
        "cookie.acceptAll": "Tout Accepter",
        "cookie.settingsTitle": "Paramètres des Cookies",
        "cookie.settingsSubtitle": "Gérez vos préférences de cookies",
        "cookie.necessary": "Cookies Nécessaires",
        "cookie.necessaryDesc": "Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés.",
        "cookie.preferences": "Cookies de Préférences",
        "cookie.preferencesDesc": "Ces cookies permettent au site de se souvenir de vos choix.",
        "cookie.statistics": "Cookies Statistiques",
        "cookie.statisticsDesc": "Ces cookies nous aident à comprendre comment les visiteurs interagissent avec le site.",
        "cookie.marketing": "Cookies Marketing",
        "cookie.marketingDesc": "Ces cookies sont utilisés pour suivre les visiteurs sur les sites web.",
        "cookie.alwaysActive": "Toujours Actif",
        "cookie.examples": "Exemples",
        "cookie.rejectAll": "Tout Refuser",
        "cookie.saveSelection": "Enregistrer la Sélection",
        "cookie.notice": "Le refus des cookies peut affecter les fonctionnalités du site.",
        // Language Selector
        "lang.continue": "Continuer",
        "lang.note": "Support multilingue disponible."
    },
    ru: {
        // Navbar
        "nav.home": "ГЛАВНАЯ",
        "nav.services": "УСЛУГИ",
        "nav.about": "О НАС",
        "nav.contact": "КОНТАКТ",
        "nav.bookNow": "ЗАБРОНИРОВАТЬ",
        // Hero
        "hero.badge": "ПРОФЕССИОНАЛЬНЫЙ МЕДИЦИНСКИЙ ТРАНСПОРТ",
        "hero.heading1": "Безопасно, Надёжно",
        "hero.heading2": "Медицинская помощь",
        "hero.heading3": "В пути",
        "hero.subtitle": "Профессиональная перевозка пациентов с заботой и опытом. Доступна 24/7 для всех ваших потребностей в медицинском транспорте.",
        "hero.bookRide": "ЗАБРОНИРОВАТЬ",
        // Services
        "services.title": "Наши",
        "services.titleHighlight": "Услуги",
        "services.subtitle": "Комплексные решения медицинского транспорта для ваших потребностей",
        "services.cta": "Запросить услугу",
        "services.cat.medical": "Медицинский транспорт",
        "services.cat.hospital": "Больничный транспорт",
        "services.cat.special": "Специальный транспорт",
        "services.cat.private": "Частные поездки",
        "services.dialysis.title": "Поездки на диализ",
        "services.dialysis.desc": "Регулярные поездки на диализ – надёжно и вовремя.",
        "services.chemo.title": "Химиотерапия",
        "services.chemo.desc": "Безопасная доставка на химиотерапию.",
        "services.radiation.title": "Лучевая терапия",
        "services.radiation.desc": "Пунктуальные поездки на сеансы лучевой терапии.",
        "services.reha.title": "Реабилитация",
        "services.reha.desc": "Транспорт в реабилитационные учреждения.",
        "services.physio.title": "Физиотерапия",
        "services.physio.desc": "Поездки в кабинеты физиотерапии.",
        "services.ergo.title": "Эрготерапия",
        "services.ergo.desc": "Транспорт на сеансы эрготерапии.",
        "services.logo.title": "Логопедия",
        "services.logo.desc": "Поездки в кабинеты логопедии.",
        "services.ambulatory.title": "Амбулаторное сопровождение",
        "services.ambulatory.desc": "Поддержка до регистрации в клинике.",
        "services.seniorCare.title": "Перевозка пожилых людей",
        "services.seniorCare.desc": "Уход при поездках в дома престарелых.",
        "services.hospitalAdmission.title": "Госпитализация",
        "services.hospitalAdmission.desc": "Мы безопасно доставим вас в больницу.",
        "services.hospitalDischarge.title": "Выписка из больницы",
        "services.hospitalDischarge.desc": "Комфортный транспорт после пребывания в больнице.",
        "services.wheelchair.title": "Транспорт для инвалидных колясок",
        "services.wheelchair.desc": "Доступный транспорт для пользователей инвалидных колясок.",
        "services.stretcher.title": "Транспорт на носилках",
        "services.stretcher.desc": "Безопасная перевозка на носилках.",
        "services.daycare.title": "Дневной уход и дома престарелых",
        "services.daycare.desc": "Ежедневные поездки в учреждения по уходу.",
        "services.doctor.title": "Визиты к врачу",
        "services.doctor.desc": "Поездки к врачам и специалистам.",
        "services.daily.title": "Ежедневные поездки",
        "services.daily.desc": "Поддержка в повседневной жизни с комфортным транспортом.",
        "services.kita.title": "Транспорт в детский сад",
        "services.kita.desc": "Безопасная перевозка детей в детские сады.",
        "services.school.title": "Школьный транспорт",
        "services.school.desc": "Надежная перевозка учеников в школу.",
        // Why Medicus
        "why.title": "Почему",
        "why.titleHighlight": "Medicus",
        "why.subtitle": "Превосходство в медицинском транспорте с заботой и профессионализмом",
        "why.patients.stat": "500+",
        "why.patients.title": "Довольных пациентов",
        "why.patients.desc": "Нам доверяют сотни довольных клиентов",
        "why.available.stat": "24/7",
        "why.available.title": "Доступно",
        "why.available.desc": "Круглосуточный сервис, когда вы нас потребуете",
        "why.safety.stat": "100%",
        "why.safety.title": "Безопасность прежде всего",
        "why.safety.desc": "Сертифицированные стандарты медицинского транспорта",
        "why.experience.stat": "5+",
        "why.experience.title": "Лет опыта",
        "why.experience.desc": "Ведущий поставщик медицинского транспорта",
        // Testimonials
        "testimonials.title": "Что говорят наши",
        "testimonials.titleHighlight": "Пациенты",
        "testimonials.subtitle": "Читайте отзывы наших довольных клиентов",
        "testimonials.verified": "Подтверждённый пациент",
        "testimonials.google": "Смотреть все отзывы на Google",
        "testimonials.t1": "Водители Medicus всегда дружелюбны и пунктуальны. Я чувствую себя в безопасности в каждой поездке.",
        "testimonials.t2": "С тех пор как мы начали пользоваться Medicus, мы больше не беспокоимся о транспорте для мамы. Замечательный сервис!",
        "testimonials.t3": "Профессионально, чутко и всегда надёжно. Medicus – наш первый выбор в медицинском транспорте.",
        "testimonials.t4": "Очень надёжно и компетентно. Команда Medicus превзошла наши ожидания.",
        "testimonials.t5": "Могу только рекомендовать Medicus. Сервис отличный, а водители очень отзывчивые.",
        "testimonials.t6": "Medicus очень помог нашей семье. Пунктуально, профессионально и с улыбкой.",
        // About
        "about.title": "О",
        "about.titleHighlight": "Medicus",
        "about.subtitle": "Больше чем транспорт – приверженность заботе",
        "about.whoWeAre": "Кто мы",
        "about.whoWeAreText": "Medicus – это специализированная служба медицинского транспорта, ориентированная на безопасную и комфортную перевозку пациентов с ограниченной подвижностью. Мы понимаем, что каждый пациент уникален и имеет индивидуальные потребности.",
        "about.mission": "Наша миссия",
        "about.missionText": "Наша опытная команда обученных водителей сопровождает вас с чуткостью и профессионализмом. Будь то регулярные поездки на диализ, визиты в больницу или терапевтические приёмы – мы обеспечим вашу безопасную и своевременную доставку.",
        "about.humanity": "Человечность",
        "about.humanityDesc": "Каждый пациент встречен с уважением и теплотой.",
        "about.safety": "Безопасность",
        "about.safetyDesc": "Высочайшие стандарты безопасности в каждом автомобиле.",
        "about.care": "Забота",
        "about.careDesc": "Мы заботимся – не только о транспорте, но и о человеке.",
        "about.experience": "Опыт",
        "about.experienceDesc": "Многолетний опыт в медицинском транспорте.",
        // Booking
        "booking.title": "Забронируйте вашу",
        "booking.titleHighlight": "Поездку",
        "booking.subtitle": "Выберите услугу, дату и время для комфортного медицинского транспорта",
        "booking.step1": "Выбрать услугу",
        "booking.step2": "Выбрать дату",
        "booking.step3": "Выбрать время",
        "booking.step4": "Ваши данные",
        "booking.service1": "Диализ / Перевозка пациентов",
        "booking.service2": "Дневной уход / Дом престарелых",
        "booking.service3": "Частная поездка",
        "booking.selected": "Выбрано",
        "booking.name": "Полное имя",
        "booking.namePlaceholder": "Иван Иванов",
        "booking.phone": "Номер телефона",
        "booking.phonePlaceholder": "+49 123 456789",
        "booking.notes": "Дополнительные примечания",
        "booking.notesPlaceholder": "Особые пожелания или адрес подачи...",
        "booking.submit": "Подтвердить бронирование",
        "booking.summary": "Обзор бронирования",
        "booking.callUs": "Позвоните нам",
        "booking.hours": "Часы работы",
        "booking.hoursValue": "Пн–Пт: 6:00–20:00",
        "booking.needHelp": "Нужна помощь?",
        "booking.needHelpText": "Наша команда с радостью ответит на ваши вопросы о наших услугах.",
        "booking.callNow": "Позвонить сейчас",
        "booking.missingInfo": "Недостающая информация",
        "booking.missingInfoDesc": "Пожалуйста, выберите дату, время и тип услуги.",
        "booking.submitted": "Бронирование отправлено!",
        "booking.submittedDesc": "Мы свяжемся с вами в ближайшее время для подтверждения.",
        // CTA
        "cta.title": "Мы здесь для вас",
        "cta.subtitle": "Забронируйте следующую поездку или позвоните нам – быстро, просто и безопасно.",
        "cta.book": "Забронировать поездку",
        // Footer
        "footer.desc": "Ваш надёжный партнёр для безопасного и комфортного медицинского транспорта.",
        "footer.quickLinks": "Быстрые ссылки",
        "footer.home": "Главная",
        "footer.servicesLink": "Услуги",
        "footer.aboutLink": "О нас",
        "footer.contactLink": "Контакт",
        "footer.ourServices": "Наши услуги",
        "footer.dialysis": "Транспорт на диализ",
        "footer.daycare": "Дневной уход",
        "footer.private": "Частный транспорт",
        "footer.hospital": "Больничный трансфер",
        "footer.contact": "Контакт",
        "footer.phone": "Телефон",
        "footer.email": "Эл. почта",
        "footer.address": "Адрес",
        "footer.hours": "Часы работы",
        "footer.hoursValue": "Пн–Пт: 6:00–20:00",
        "footer.copyright": "Medicus Dienstleistungen GmbH. Все права защищены.",
        "footer.privacy": "Политика конфиденциальности",
        "footer.imprint": "Импрессум",
        // Cookie Banner
        "cookie.title": "Мы используем файлы cookie",
        "cookie.text": "Мы используем файлы cookie и аналогичные технологии, чтобы обеспечить вам лучший опыт на нашем сайте. Некоторые необходимы для работы сайта, а другие помогают нам улучшить сайт и ваш опыт. Вы можете выбрать, какие категории разрешить.",
        "cookie.learnMore": "Узнать больше",
        "cookie.settings": "Настройки",
        "cookie.reject": "Отклонить",
        "cookie.acceptAll": "Принять все",
        "cookie.settingsTitle": "Настройки файлов cookie",
        "cookie.settingsSubtitle": "Управляйте настройками файлов cookie",
        "cookie.necessary": "Необходимые файлы cookie",
        "cookie.necessaryDesc": "Эти файлы cookie необходимы для работы сайта и не могут быть отключены.",
        "cookie.preferences": "Файлы cookie предпочтений",
        "cookie.preferencesDesc": "Эти файлы cookie позволяют сайту запоминать ваши решения.",
        "cookie.statistics": "Статистические файлы cookie",
        "cookie.statisticsDesc": "Эти файлы cookie помогают нам понять, как посетители взаимодействуют с сайтом.",
        "cookie.marketing": "Маркетинговые файлы cookie",
        "cookie.marketingDesc": "Эти файлы cookie используются для отслеживания посетителей на сайтах.",
        "cookie.alwaysActive": "Всегда активно",
        "cookie.examples": "Примеры",
        "cookie.rejectAll": "Отклонить все",
        "cookie.saveSelection": "Сохранить выбор",
        "cookie.notice": "Отказ от файлов cookie может повлиять на функциональность сайта.",
        // Language Selector
        "lang.continue": "Продолжить",
        "lang.note": "Доступна многоязычная поддержка."
    },
    uk: {
        // Navbar
        "nav.home": "ГОЛОВНА",
        "nav.services": "ПОСЛУГИ",
        "nav.about": "ПРО НАС",
        "nav.contact": "КОНТАКТИ",
        "nav.bookNow": "ЗАБРОНЮВАТИ",
        // Hero
        "hero.badge": "ПРОФЕСІЙНИЙ МЕДИЧНИЙ ТРАНСПОРТ",
        "hero.heading1": "Безпечно, Надійно",
        "hero.heading2": "Медична допомога",
        "hero.heading3": "В дорозі",
        "hero.subtitle": "Професійне перевезення пацієнтів з турботою та досвідом. Доступно 24/7 для всіх ваших потреб у медичному транспорті.",
        "hero.bookRide": "ЗАБРОНЮВАТИ",
        // Services
        "services.title": "Наші",
        "services.titleHighlight": "Послуги",
        "services.subtitle": "Комплексні рішення медичного транспорту для ваших потреб",
        "services.cta": "Замовити послугу",
        "services.cat.medical": "Медичний транспорт",
        "services.cat.hospital": "Лікарняний транспорт",
        "services.cat.special": "Спеціальний транспорт",
        "services.cat.private": "Приватні поїздки",
        "services.dialysis.title": "Поїздки на діаліз",
        "services.dialysis.desc": "Регулярні поїздки на діаліз – надійно та вчасно.",
        "services.chemo.title": "Хіміотерапія",
        "services.chemo.desc": "Безпечна доставка на хіміотерапію.",
        "services.radiation.title": "Променева терапія",
        "services.radiation.desc": "Пунктуальні поїздки на сеанси променевої терапії.",
        "services.reha.title": "Реабілітація",
        "services.reha.desc": "Транспорт до реабілітаційних закладів.",
        "services.physio.title": "Фізіотерапія",
        "services.physio.desc": "Поїздки до кабінетів фізіотерапії.",
        "services.ergo.title": "Ерготерапія",
        "services.ergo.desc": "Транспорт на сеанси ерготерапії.",
        "services.logo.title": "Логопедія",
        "services.logo.desc": "Поїздки до кабінетів логопедії.",
        "services.ambulatory.title": "Амбулаторний супровід",
        "services.ambulatory.desc": "Підтримка до реєстрації в клініці.",
        "services.seniorCare.title": "Перевезення літніх людей",
        "services.seniorCare.desc": "Догляд при поїздках до будинків для літніх.",
        "services.hospitalAdmission.title": "Госпіталізація",
        "services.hospitalAdmission.desc": "Ми безпечно доставимо вас до лікарні.",
        "services.hospitalDischarge.title": "Виписка з лікарні",
        "services.hospitalDischarge.desc": "Комфортний транспорт після перебування в лікарні.",
        "services.wheelchair.title": "Транспорт для інвалідних візків",
        "services.wheelchair.desc": "Доступний транспорт для користувачів інвалідних візків.",
        "services.stretcher.title": "Транспорт на ношах",
        "services.stretcher.desc": "Безпечне перевезення на ношах.",
        "services.daycare.title": "Денний догляд та будинки для літніх",
        "services.daycare.desc": "Щоденні поїздки до закладів догляду.",
        "services.doctor.title": "Візити до лікаря",
        "services.doctor.desc": "Поїздки до лікарів та спеціалістів.",
        "services.daily.title": "Щоденні поїздки",
        "services.daily.desc": "Підтримка у повсякденному житті з комфортним транспортом.",
        "services.kita.title": "Транспорт до дитячого садка",
        "services.kita.desc": "Безпечне перевезення дітей до дитячих садків.",
        "services.school.title": "Шкільний транспорт",
        "services.school.desc": "Надійне перевезення учнів до школи.",
        // Why Medicus
        "why.title": "Чому",
        "why.titleHighlight": "Medicus",
        "why.subtitle": "Досконалість у медичному транспорті з турботою та професіоналізмом",
        "why.patients.stat": "500+",
        "why.patients.title": "Задоволених пацієнтів",
        "why.patients.desc": "Нам довіряють сотні задоволених клієнтів",
        "why.available.stat": "24/7",
        "why.available.title": "Доступно",
        "why.available.desc": "Цілодобовий сервіс, коли ви нас потребуєте",
        "why.safety.stat": "100%",
        "why.safety.title": "Безпека перш за все",
        "why.safety.desc": "Сертифіковані стандарти медичного транспорту",
        "why.experience.stat": "5+",
        "why.experience.title": "Років досвіду",
        "why.experience.desc": "Провідний постачальник медичного транспорту",
        // Testimonials
        "testimonials.title": "Що кажуть наші",
        "testimonials.titleHighlight": "Пацієнти",
        "testimonials.subtitle": "Читайте відгуки наших задоволених клієнтів",
        "testimonials.verified": "Підтверджений пацієнт",
        "testimonials.google": "Дивитися всі відгуки на Google",
        "testimonials.t1": "Водії Medicus завжди привітні та пунктуальні. Я почуваюся в безпеці під час кожної поїздки.",
        "testimonials.t2": "Відколи ми почали користуватися Medicus, ми більше не хвилюємося про транспорт для мами. Чудовий сервіс!",
        "testimonials.t3": "Професійно, чуйно і завжди надійно. Medicus – наш перший вибір у медичному транспорті.",
        "testimonials.t4": "Дуже надійно та компетентно. Команда Medicus перевершила наші очікування.",
        "testimonials.t5": "Можу лише рекомендувати Medicus. Сервіс відмінний, а водії дуже чуйні.",
        "testimonials.t6": "Medicus дуже допоміг нашій родині. Пунктуально, професійно і з посмішкою.",
        // About
        "about.title": "Про",
        "about.titleHighlight": "Medicus",
        "about.subtitle": "Більше ніж транспорт – відданість турботі",
        "about.whoWeAre": "Хто ми",
        "about.whoWeAreText": "Medicus – це спеціалізована служба медичного транспорту, зосереджена на безпечному та комфортному перевезенні пацієнтів з обмеженою рухливістю. Ми розуміємо, що кожен пацієнт унікальний і має індивідуальні потреби.",
        "about.mission": "Наша місія",
        "about.missionText": "Наша досвідчена команда навчених водіїв супроводжує вас з чуйністю та професіоналізмом. Чи то регулярні поїздки на діаліз, відвідування лікарні чи терапевтичні прийоми – ми забезпечимо вашу безпечну та своєчасну доставку.",
        "about.humanity": "Людяність",
        "about.humanityDesc": "Кожен пацієнт зустрінутий з повагою та теплотою.",
        "about.safety": "Безпека",
        "about.safetyDesc": "Найвищі стандарти безпеки в кожному автомобілі.",
        "about.care": "Турбота",
        "about.careDesc": "Ми дбаємо – не лише про транспорт, а й про людину.",
        "about.experience": "Досвід",
        "about.experienceDesc": "Багаторічний досвід у медичному транспорті.",
        // Booking
        "booking.title": "Забронюйте вашу",
        "booking.titleHighlight": "Поїздку",
        "booking.subtitle": "Оберіть послугу, дату та час для комфортного медичного транспорту",
        "booking.step1": "Обрати послугу",
        "booking.step2": "Обрати дату",
        "booking.step3": "Обрати час",
        "booking.step4": "Ваші дані",
        "booking.service1": "Діаліз / Перевезення пацієнтів",
        "booking.service2": "Денний догляд / Будинок для літніх",
        "booking.service3": "Приватна поїздка",
        "booking.selected": "Обрано",
        "booking.name": "Повне ім'я",
        "booking.namePlaceholder": "Іван Іваненко",
        "booking.phone": "Номер телефону",
        "booking.phonePlaceholder": "+49 123 456789",
        "booking.notes": "Додаткові примітки",
        "booking.notesPlaceholder": "Особливі побажання або адреса подачі...",
        "booking.submit": "Підтвердити бронювання",
        "booking.summary": "Огляд бронювання",
        "booking.callUs": "Зателефонуйте нам",
        "booking.hours": "Години роботи",
        "booking.hoursValue": "Пн–Пт: 6:00–20:00",
        "booking.needHelp": "Потрібна допомога?",
        "booking.needHelpText": "Наша команда з радістю відповість на ваші запитання про наші послуги.",
        "booking.callNow": "Зателефонувати зараз",
        "booking.missingInfo": "Відсутня інформація",
        "booking.missingInfoDesc": "Будь ласка, оберіть дату, час та тип послуги.",
        "booking.submitted": "Бронювання надіслано!",
        "booking.submittedDesc": "Ми зв'яжемося з вами найближчим часом для підтвердження.",
        // CTA
        "cta.title": "Ми тут для вас",
        "cta.subtitle": "Забронюйте наступну поїздку або зателефонуйте нам – швидко, просто та безпечно.",
        "cta.book": "Забронювати поїздку",
        // Footer
        "footer.desc": "Ваш надійний партнер для безпечного та комфортного медичного транспорту.",
        "footer.quickLinks": "Швидкі посилання",
        "footer.home": "Головна",
        "footer.servicesLink": "Послуги",
        "footer.aboutLink": "Про нас",
        "footer.contactLink": "Контакти",
        "footer.ourServices": "Наші послуги",
        "footer.dialysis": "Транспорт на діаліз",
        "footer.daycare": "Денний догляд",
        "footer.private": "Приватний транспорт",
        "footer.hospital": "Лікарняний трансфер",
        "footer.contact": "Контакти",
        "footer.phone": "Телефон",
        "footer.email": "Ел. пошта",
        "footer.address": "Адреса",
        "footer.hours": "Години роботи",
        "footer.hoursValue": "Пн–Пт: 6:00–20:00",
        "footer.copyright": "Medicus Dienstleistungen GmbH. Усі права захищені.",
        "footer.privacy": "Політика конфіденційності",
        "footer.imprint": "Імпресум",
        // Cookie Banner
        "cookie.title": "Ми використовуємо файли cookie",
        "cookie.text": "Ми використовуємо файли cookie та подібні технології, щоб забезпечити вам найкращий досвід на нашому сайті. Деякі необхідні для роботи сайту, а інші допомагають нам покращити сайт та ваш досвід. Ви можете обрати, які категорії дозволити.",
        "cookie.learnMore": "Дізнатися більше",
        "cookie.settings": "Налаштування",
        "cookie.reject": "Відхилити",
        "cookie.acceptAll": "Прийняти всі",
        "cookie.settingsTitle": "Налаштування файлів cookie",
        "cookie.settingsSubtitle": "Керуйте налаштуваннями файлів cookie",
        "cookie.necessary": "Необхідні файли cookie",
        "cookie.necessaryDesc": "Ці файли cookie необхідні для роботи сайту і не можуть бути вимкнені.",
        "cookie.preferences": "Файли cookie вподобань",
        "cookie.preferencesDesc": "Ці файли cookie дозволяють сайту запам'ятовувати ваші рішення.",
        "cookie.statistics": "Статистичні файли cookie",
        "cookie.statisticsDesc": "Ці файли cookie допомагають нам зрозуміти, як відвідувачі взаємодіють з сайтом.",
        "cookie.marketing": "Маркетингові файли cookie",
        "cookie.marketingDesc": "Ці файли cookie використовуються для відстеження відвідувачів на сайтах.",
        "cookie.alwaysActive": "Завжди активно",
        "cookie.examples": "Приклади",
        "cookie.rejectAll": "Відхилити всі",
        "cookie.saveSelection": "Зберегти вибір",
        "cookie.notice": "Відмова від файлів cookie може вплинути на функціональність сайту.",
        // Language Selector
        "lang.continue": "Продовжити",
        "lang.note": "Доступна багатомовна підтримка."
    }
};
}),
"[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    language: "de",
    setLanguage: ()=>{},
    t: (key)=>key,
    isRTL: false
});
function LanguageProvider({ children }) {
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("de");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = localStorage.getItem("user-language");
        if (stored && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][stored]) {
            setLanguageState(stored);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.lang = language;
    }, [
        language
    ]);
    const setLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((lang)=>{
        setLanguageState(lang);
        localStorage.setItem("user-language", lang);
    }, []);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][language]?.[key] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"].de[key] || key;
    }, [
        language
    ]);
    const isRTL = language === "ar";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t,
            isRTL
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/LanguageContext.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 42,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/src/assets/logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/logo.3031c4fb.png");}),
"[project]/src/assets/logo.png.mjs { IMAGE => \"[project]/src/assets/logo.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1536,
    height: 1024,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAlElEQVR42i2OsQrCQAyGM6g4SHV0cxB8F4toHZwq2F7vcslZB0GlOKmr+AZ1dXD3/cz1OvwkJPB9PyAiGGNA6xCkPSAfwLR3sJZAm2M/U9UoK67R7vSe6PtnjO7cQfkBuxK2+XM6T+pNvK6XcfpNVu63SPPXjLgUArEgL93C3gYKmwwVPSLkqufp4gmuMNvd+yW+3x/adzPum1pvmgAAAABJRU5ErkJggg=="
};
}),
"[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo.png.mjs { IMAGE => "[project]/src/assets/logo.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
;
;
;
const Navbar = ()=>{
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("#");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const navItems = [
        {
            label: t("nav.home"),
            path: "#"
        },
        {
            label: t("nav.services"),
            path: "#leistungen"
        },
        {
            label: t("nav.about"),
            path: "#ueber-uns"
        },
        {
            label: t("nav.contact"),
            path: "#kontakt"
        }
    ];
    const handleScroll = (e, path)=>{
        e.preventDefault();
        setActiveSection(path);
        // If we're not on the home page, navigate there first
        if (pathname !== "/") {
            router.push("/" + path);
            setMobileOpen(false);
            return;
        }
        if (path === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            const element = document.querySelector(path);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
        setMobileOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            onClick: (e)=>handleScroll(e, "#"),
                            className: "flex items-center gap-3 group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                alt: "Medicus",
                                className: "h-40 w-auto transition-transform group-hover:scale-105"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center gap-10",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.path,
                                    onClick: (e)=>handleScroll(e, item.path),
                                    className: `text-sm font-semibold tracking-widest transition-all duration-300 relative group ${activeSection === item.path ? "text-primary" : "text-gray-700 hover:text-primary"}`,
                                    children: [
                                        item.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeSection === item.path ? "w-full" : "w-0 group-hover:w-full"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.path, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+492289473203",
                                    className: "flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "0228 94732030"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    size: "lg",
                                    className: "text-sm font-semibold tracking-wide px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#kontakt",
                                        onClick: (e)=>handleScroll(e, "#kontakt"),
                                        children: t("nav.bookNow")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "lg:hidden p-2 text-gray-700 hover:text-primary transition-colors",
                            onClick: ()=>setMobileOpen(!mobileOpen),
                            "aria-label": "Toggle menu",
                            children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-7 w-7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 103,
                                columnNumber: 27
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "h-7 w-7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 103,
                                columnNumber: 55
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "lg:hidden bg-white border-t border-gray-200 shadow-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-6 space-y-1",
                    children: [
                        navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.path,
                                onClick: (e)=>handleScroll(e, item.path),
                                className: `block py-4 px-4 text-sm font-semibold tracking-widest rounded-lg transition-all ${activeSection === item.path ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`,
                                children: item.label
                            }, item.path, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+492289473203",
                                    className: "flex items-center gap-3 py-3 px-4 text-primary font-semibold hover:bg-gray-100 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "0228 94732030"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    size: "lg",
                                    className: "w-full text-sm font-semibold tracking-wide py-6 rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#kontakt",
                                        onClick: (e)=>handleScroll(e, "#kontakt"),
                                        children: t("nav.bookNow")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 111,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo.png.mjs { IMAGE => "[project]/src/assets/logo.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
;
const Footer = ()=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const handleScroll = (e, path)=>{
        e.preventDefault();
        if (path === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            const element = document.querySelector(path);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-white border-t border-gray-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-12 md:py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                    alt: "Medicus",
                                    className: "h-10 md:h-12 w-auto mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm md:text-base leading-relaxed mb-6",
                                    children: t("footer.desc")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-gray-900 text-lg font-bold mb-4 md:mb-6",
                                    children: t("footer.quickLinks")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: [
                                        {
                                            label: t("footer.home"),
                                            path: "#"
                                        },
                                        {
                                            label: t("footer.servicesLink"),
                                            path: "#leistungen"
                                        },
                                        {
                                            label: t("footer.aboutLink"),
                                            path: "#ueber-uns"
                                        },
                                        {
                                            label: t("footer.contactLink"),
                                            path: "#kontakt"
                                        }
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: item.path,
                                                onClick: (e)=>handleScroll(e, item.path),
                                                className: "text-gray-600 hover:text-primary transition-colors text-sm md:text-base flex items-center gap-2 group cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    item.label
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, item.path, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-gray-900 text-lg font-bold mb-4 md:mb-6",
                                    children: t("footer.ourServices")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-gray-600 text-sm md:text-base",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t("footer.dialysis")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t("footer.daycare")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t("footer.private")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t("footer.hospital")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-gray-900 text-lg font-bold mb-4 md:mb-6",
                                    children: t("footer.contact")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "h-5 w-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500 mb-1",
                                                            children: t("footer.phone")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "tel:+492289473203",
                                                            className: "text-sm md:text-base text-gray-900 font-semibold hover:text-primary transition-colors",
                                                            children: "0228 94732030"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        className: "h-5 w-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500 mb-1",
                                                            children: t("footer.email")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:info@medi-cus.eu",
                                                            className: "text-sm md:text-base text-gray-900 font-semibold hover:text-primary transition-colors break-all",
                                                            children: "info@medi-cus.eu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "h-5 w-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500 mb-1",
                                                            children: t("footer.address")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm md:text-base text-gray-900 font-semibold leading-relaxed",
                                                            children: [
                                                                "Siemensstr. 36",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 113
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "53121 Bonn"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "h-5 w-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500 mb-1",
                                                            children: t("footer.hours")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm md:text-base text-gray-900 font-semibold",
                                                            children: t("footer.hoursValue")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-200 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm text-center md:text-left",
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " ",
                                    t("footer.copyright")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6 text-sm text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/datenschutz",
                                        className: "hover:text-primary transition-colors",
                                        children: t("footer.privacy")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/impressum",
                                        className: "hover:text-primary transition-colors",
                                        children: t("footer.imprint")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/src/components/CookieBanner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cookie.js [app-ssr] (ecmascript) <export default as Cookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const CookieBanner = ()=>{
    const [showBanner, setShowBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedCategory, setExpandedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [preferences, setPreferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        necessary: true,
        preferences: false,
        statistics: false,
        marketing: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Show banner after a short delay for better UX
            setTimeout(()=>setShowBanner(true), 1000);
        }
    }, []);
    const handleAcceptAll = ()=>{
        const allAccepted = {
            necessary: true,
            preferences: true,
            statistics: true,
            marketing: true,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
        setShowBanner(false);
        setShowSettings(false);
    };
    const handleRejectAll = ()=>{
        const onlyNecessary = {
            necessary: true,
            preferences: false,
            statistics: false,
            marketing: false,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem("cookie-consent", JSON.stringify(onlyNecessary));
        setShowBanner(false);
        setShowSettings(false);
    };
    const handleSavePreferences = ()=>{
        const savedPreferences = {
            ...preferences,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem("cookie-consent", JSON.stringify(savedPreferences));
        setShowBanner(false);
        setShowSettings(false);
    };
    const cookieCategories = [
        {
            id: "necessary",
            titleKey: "cookie.necessary",
            descKey: "cookie.necessaryDesc",
            required: true,
            items: [
                "Session-Cookies",
                "Cookie-Consent",
                "Security-Cookies"
            ]
        },
        {
            id: "preferences",
            titleKey: "cookie.preferences",
            descKey: "cookie.preferencesDesc",
            required: false,
            items: [
                "Language Settings",
                "User Preferences",
                "Layout Settings"
            ]
        },
        {
            id: "statistics",
            titleKey: "cookie.statistics",
            descKey: "cookie.statisticsDesc",
            required: false,
            items: [
                "Google Analytics",
                "Visitor Count",
                "Page Views"
            ]
        },
        {
            id: "marketing",
            titleKey: "cookie.marketing",
            descKey: "cookie.marketingDesc",
            required: false,
            items: [
                "Facebook Pixel",
                "Google Ads",
                "Retargeting-Cookies"
            ]
        }
    ];
    const toggleCategory = (categoryId)=>{
        setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showBanner && !showSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: 100,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    exit: {
                        y: 100,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3,
                        ease: "easeOut"
                    },
                    className: "fixed bottom-0 left-0 right-0 z-[100] bg-white border-t-2 border-gray-200 shadow-2xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4 py-6 lg:py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:flex-row items-start lg:items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"], {
                                                className: "h-6 w-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CookieBanner.tsx",
                                                lineNumber: 141,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-gray-900 mb-2",
                                                    children: t("cookie.title")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 leading-relaxed",
                                                    children: [
                                                        t("cookie.text"),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/datenschutz",
                                                            className: "text-primary hover:underline font-medium",
                                                            children: t("cookie.learnMore")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                            lineNumber: 143,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setShowSettings(true),
                                            variant: "outline",
                                            className: "text-sm font-semibold px-6 py-5 border-2 border-gray-300 hover:bg-gray-50 w-full sm:w-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                t("cookie.settings")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleRejectAll,
                                            variant: "outline",
                                            className: "text-sm font-semibold px-6 py-5 border-2 border-gray-300 hover:bg-gray-50 w-full sm:w-auto",
                                            children: t("cookie.reject")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleAcceptAll,
                                            className: "text-sm font-semibold px-6 py-5 bg-primary hover:bg-primary-dark w-full sm:w-auto",
                                            children: t("cookie.acceptAll")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                    lineNumber: 157,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CookieBanner.tsx",
                            lineNumber: 137,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CookieBanner.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/CookieBanner.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/CookieBanner.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "fixed inset-0 bg-black/50 z-[101]",
                            onClick: ()=>setShowSettings(false)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CookieBanner.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.95,
                                y: 20
                            },
                            transition: {
                                duration: 0.2
                            },
                            className: "fixed inset-4 lg:inset-auto lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-full lg:max-w-3xl z-[102] bg-white rounded-2xl shadow-2xl overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-primary to-primary-dark p-6 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowSettings(false),
                                            className: "absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CookieBanner.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    className: "h-8 w-8 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold text-white",
                                                            children: t("cookie.settingsTitle")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-white/90 mt-1",
                                                            children: t("cookie.settingsSubtitle")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-h-[60vh] overflow-y-auto p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: cookieCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-2 border-gray-200 rounded-xl overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gray-50 p-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>toggleCategory(category.id),
                                                                                className: "text-gray-600 hover:text-gray-900 transition-colors",
                                                                                children: expandedCategory === category.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                                    className: "h-5 w-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                                                                    lineNumber: 243,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                    className: "h-5 w-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                                                                    lineNumber: 245,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CookieBanner.tsx",
                                                                                lineNumber: 238,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-bold text-gray-900",
                                                                                children: t(category.titleKey)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CookieBanner.tsx",
                                                                                lineNumber: 248,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            category.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-semibold",
                                                                                children: t("cookie.alwaysActive")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CookieBanner.tsx",
                                                                                lineNumber: 250,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CookieBanner.tsx",
                                                                        lineNumber: 237,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    !category.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "relative inline-flex items-center cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: preferences[category.id],
                                                                                onChange: (e)=>setPreferences({
                                                                                        ...preferences,
                                                                                        [category.id]: e.target.checked
                                                                                    }),
                                                                                className: "sr-only peer"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CookieBanner.tsx",
                                                                                lineNumber: 257,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CookieBanner.tsx",
                                                                                lineNumber: 268,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CookieBanner.tsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CookieBanner.tsx",
                                                                lineNumber: 236,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                            children: expandedCategory === category.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    height: 0,
                                                                    opacity: 0
                                                                },
                                                                animate: {
                                                                    height: "auto",
                                                                    opacity: 1
                                                                },
                                                                exit: {
                                                                    height: 0,
                                                                    opacity: 0
                                                                },
                                                                transition: {
                                                                    duration: 0.2
                                                                },
                                                                className: "overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-4 border-t border-gray-200 bg-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-600 mb-4 leading-relaxed",
                                                                            children: t(category.descKey)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                                                            lineNumber: 285,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs font-semibold text-gray-700 uppercase tracking-wide",
                                                                                    children: [
                                                                                        t("cookie.examples"),
                                                                                        ":"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                                                                    lineNumber: 289,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                    className: "space-y-1",
                                                                                    children: category.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            className: "text-sm text-gray-600 flex items-center gap-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "w-1.5 h-1.5 bg-primary rounded-full"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                                                                                    lineNumber: 295,
                                                                                                    columnNumber: 39
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                item
                                                                                            ]
                                                                                        }, idx, true, {
                                                                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                                                                            lineNumber: 294,
                                                                                            columnNumber: 37
                                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                                                                    lineNumber: 292,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                                                            lineNumber: 288,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                                                    lineNumber: 284,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CookieBanner.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, category.id, true, {
                                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Hinweis:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CookieBanner.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    t("cookie.notice"),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/datenschutz",
                                                        className: "text-primary hover:underline font-semibold",
                                                        children: "Datenschutzerklärung"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CookieBanner.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CookieBanner.tsx",
                                                lineNumber: 311,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CookieBanner.tsx",
                                            lineNumber: 310,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-gray-200 p-6 bg-gray-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: handleRejectAll,
                                                variant: "outline",
                                                className: "flex-1 text-sm font-semibold py-5 border-2",
                                                children: t("cookie.rejectAll")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CookieBanner.tsx",
                                                lineNumber: 323,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: handleSavePreferences,
                                                className: "flex-1 text-sm font-semibold py-5 bg-gray-700 hover:bg-gray-800",
                                                children: t("cookie.saveSelection")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CookieBanner.tsx",
                                                lineNumber: 330,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: handleAcceptAll,
                                                className: "flex-1 text-sm font-semibold py-5 bg-primary hover:bg-primary-dark",
                                                children: t("cookie.acceptAll")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CookieBanner.tsx",
                                                lineNumber: 336,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CookieBanner.tsx",
                                        lineNumber: 322,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CookieBanner.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CookieBanner.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/CookieBanner.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = CookieBanner;
}),
"[project]/src/components/LanguageSelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const languages = [
    {
        code: "de",
        name: "German",
        nativeName: "Deutsch",
        countryCode: "de"
    },
    {
        code: "en",
        name: "English",
        nativeName: "English",
        countryCode: "gb"
    },
    {
        code: "ar",
        name: "Arabic",
        nativeName: "العربية",
        countryCode: "sa"
    },
    {
        code: "fr",
        name: "French",
        nativeName: "Français",
        countryCode: "fr"
    },
    {
        code: "ru",
        name: "Russian",
        nativeName: "Русский",
        countryCode: "ru"
    },
    {
        code: "uk",
        name: "Ukrainian",
        nativeName: "Українська",
        countryCode: "ua"
    }
];
const FlagImg = ({ countryCode, size = 24, className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: `https://flagcdn.com/w80/${countryCode}.png`,
        srcSet: `https://flagcdn.com/w160/${countryCode}.png 2x`,
        width: size,
        height: Math.round(size * 0.75),
        alt: "",
        className: `inline-block object-cover rounded-sm ${className}`,
        style: {
            aspectRatio: '4/3'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/LanguageSelector.tsx",
        lineNumber: 57,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const LanguageSelector = ()=>{
    const [showDialog, setShowDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFloatingMenu, setShowFloatingMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { language, setLanguage, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(language);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedLanguage = localStorage.getItem("user-language");
        if (!savedLanguage) {
            // Wait for cookie consent before showing language dialog
            const checkCookieConsent = ()=>{
                const consent = localStorage.getItem("cookie-consent");
                if (consent) {
                    setTimeout(()=>setShowDialog(true), 500);
                } else {
                    // Check again in 500ms
                    setTimeout(checkCookieConsent, 500);
                }
            };
            // Start checking after a short delay
            setTimeout(checkCookieConsent, 500);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSelected(language);
    }, [
        language
    ]);
    const handleLanguageSelect = (languageCode)=>{
        setSelected(languageCode);
        setLanguage(languageCode);
        localStorage.setItem("language-selected-at", new Date().toISOString());
        setShowDialog(false);
        setShowFloatingMenu(false);
    };
    const currentLang = languages.find((l)=>l.code === language);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-[90]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: showFloatingMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    className: "fixed inset-0 z-[89]",
                                    onClick: ()=>setShowFloatingMenu(false)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LanguageSelector.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10,
                                        scale: 0.95
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: 10,
                                        scale: 0.95
                                    },
                                    transition: {
                                        duration: 0.2
                                    },
                                    className: "absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-56 z-[91]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2",
                                        children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleLanguageSelect(lang.code),
                                                className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${language === lang.code ? "bg-primary/10 text-primary" : "hover:bg-gray-100 text-gray-700"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlagImg, {
                                                        countryCode: lang.countryCode,
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LanguageSelector.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold truncate",
                                                                children: lang.nativeName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LanguageSelector.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-gray-400",
                                                                children: lang.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LanguageSelector.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/LanguageSelector.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    language === lang.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "h-4 w-4 text-primary flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LanguageSelector.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, lang.code, true, {
                                                fileName: "[project]/src/components/LanguageSelector.tsx",
                                                lineNumber: 131,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LanguageSelector.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LanguageSelector.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageSelector.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        initial: {
                            scale: 0
                        },
                        animate: {
                            scale: 1
                        },
                        transition: {
                            delay: 1,
                            type: "spring",
                            stiffness: 200
                        },
                        onClick: ()=>setShowFloatingMenu(!showFloatingMenu),
                        className: "w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group relative",
                        title: "Change language",
                        children: currentLang ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlagImg, {
                            countryCode: currentLang.countryCode,
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/components/LanguageSelector.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                            className: "h-5 w-5 text-gray-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LanguageSelector.tsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageSelector.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LanguageSelector.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LanguageSelector.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.9,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.9,
                                y: 20
                            },
                            transition: {
                                duration: 0.3,
                                ease: "easeOut"
                            },
                            className: "fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-xl h-fit max-h-[90vh] z-[151] bg-white rounded-2xl shadow-2xl overflow-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-primary via-primary-dark to-primary text-white px-6 py-5 text-center relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_60%)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LanguageSelector.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                scale: 0
                                            },
                                            animate: {
                                                scale: 1
                                            },
                                            transition: {
                                                delay: 0.2,
                                                type: "spring",
                                                stiffness: 200
                                            },
                                            className: "relative flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                        className: "h-7 w-7 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LanguageSelector.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LanguageSelector.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-bold",
                                                    children: "Welcome! Willkommen! !مرحبا Bienvenue! Добро пожаловать! Ласкаво просимо!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LanguageSelector.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/90 text-sm mt-1",
                                                    children: "Please select your preferred language"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LanguageSelector.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LanguageSelector.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LanguageSelector.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: languages.map((language, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        delay: 0.05 * index
                                                    },
                                                    onClick: ()=>handleLanguageSelect(language.code),
                                                    className: `group relative p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${selected === language.code ? "border-primary bg-primary/5 shadow-md" : "border-gray-200 hover:border-primary/50 bg-white"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlagImg, {
                                                                countryCode: language.countryCode,
                                                                size: 32
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LanguageSelector.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 text-left min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-base font-bold text-gray-900 group-hover:text-primary transition-colors truncate",
                                                                        children: language.nativeName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/LanguageSelector.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500",
                                                                        children: language.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/LanguageSelector.tsx",
                                                                        lineNumber: 237,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/LanguageSelector.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            selected === language.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    scale: 0
                                                                },
                                                                animate: {
                                                                    scale: 1
                                                                },
                                                                className: "w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: "h-4 w-4 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LanguageSelector.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LanguageSelector.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/LanguageSelector.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, language.code, false, {
                                                    fileName: "[project]/src/components/LanguageSelector.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LanguageSelector.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: 0.3
                                            },
                                            className: "mt-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: ()=>handleLanguageSelect(selected),
                                                className: "w-full text-base font-semibold py-5 bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all",
                                                size: "lg",
                                                children: [
                                                    t("lang.continue"),
                                                    " / Continue"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/LanguageSelector.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LanguageSelector.tsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400 text-center mt-3",
                                            children: t("lang.note")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LanguageSelector.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LanguageSelector.tsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LanguageSelector.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/LanguageSelector.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = LanguageSelector;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bb93ab35._.js.map