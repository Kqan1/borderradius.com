"use client";
import { usePathname } from "next/navigation";
import styled, { keyframes } from "styled-components";

function NotFound() {
    const currentPath = usePathname();

    let text = `Your search ${currentPath} is not found `;

    const typingKeyframes = keyframes`
        from { width: 0%; }

        to { width: ${text.length}ch; }
    `;

    const NotFoundText = styled.span`animation: ${typingKeyframes} 3s steps(${text.length}, end) forwards`;

    const TypeCursorKeyframes = keyframes`
    from { display: inline }
    to { display: none }
    `;

    const TypeCursor = styled.span`animation: ${TypeCursorKeyframes} 1.5s steps(2, start) infinite`;

    return (
        <div className="font-mono h-[calc(100vh-4rem)] pointer-events-none -translate-y-16 flex flex-col items-center justify-center text-slate-700 dark:text-slate-300">
            <h1 className="text-9xl">404</h1>
            <NotFoundText className="leading-5 relative whitespace-nowrap overflow-hidden">
                {text}
                <TypeCursor className="absolute right-0 h-full w-0.5 bg-slate-700 dark:bg-slate-300">test</TypeCursor>
            </NotFoundText>
        </div>
    );
}

export default NotFound;