import * as React from "react"
export const HurricaneSvg = (props: any) => (
  // 95 95
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 95 95" 
      strokeWidth="0.1"
      {...props}
    > 
    <path d="M86.23 37.67c1.76-1.75 2.88-4.45 2.11-6.91-.86-2.73-3.79-4.23-6.2-5.39a33.62 33.62 0 0 0-4.98-1.9c4.2-1.28 8.66-3.87 8.62-8.77-.03-4.34-4.51-6.43-8.19-7.07-2.34-.4-4.71-.43-7.08-.48-2.94-.06-5.87-.08-8.81-.05-8.63.09-17.26.55-25.85 1.39 1.21-.19 2.42-.36 3.64-.51 9.31-1.16 18.69-1.27 28.06-1.16 2.37.03 4.75.07 7.12.11 1.09.02 2.62-.45 2.89-1.68.26-1.18-1.04-1.93-2.05-1.95-20.98-.39-43.03-.7-62.63 7.91-1.74.76-3.82 1.57-4.93 3.17-3.39 1.81-6.97 4.65-4.14 7.63 1.63 1.72 4.24 1.91 6.44 2.11 2.85.26 5.7.45 8.56.57.48.02.96.03 1.43.05-1.68 1.25-3.12 2.74-4.02 4.61-.34.71-.56 1.41-.67 2.09a55.43 55.43 0 0 0-3.37 1.66c-2.24 1.21-4.58 3.02-5.74 5.34-1.15 2.31-.8 4.88 1.16 6.63 2.02 1.81 4.99 2.79 7.52 3.61 3.61 1.17 7.38 1.77 11.17 1.98 1.03.38 2.08.72 3.15 1.02-2.55 1.87-4.71 4.31-4.53 7.4-.85 1.24-1.33 2.68-.93 4.21.63 2.43 2.94 3.76 5.14 4.57.97.36 1.98.62 3.01.86-.05.12-.1.24-.14.36-.99 3.12 1.28 5.2 4 6.58-2.17 1.1-4.04 2.65-4.97 4.93-.71 1.72-.76 3.7.02 5.41.59 1.28 1.66 2.16 2.89 2.73-.38 1.1.58 2 1.92 2.13 2.74.27 5.49.06 8.15-.56 1.29.02 2.58-.01 3.85-.12 4.44-.38 8.58-2.08 11.37-5.64.54-.69.05-1.8-.7-2.11-7.13-2.89-15.75-1.7-21.69 3.16-.32-.17-.61-.39-.82-.67-.87-1.2-.64-3.04.11-4.23 1.03-1.62 2.91-2.42 4.66-3 .15-.05.31-.08.46-.13 4.98 1.33 10.25 1.19 15.2-.22 1.85-.53 2.11-2.82.13-3.35-4.8-1.28-9.91-1.44-14.76-.32-.71-.24-1.41-.51-2.08-.84-1.22-.58-3.16-1.31-2.92-2.97.02-.11.05-.21.07-.32.24.03.48.07.72.1 3.01.4 6.05.57 9.08.5 6.08-.14 12.08-1.15 17.87-3.04.98-.32 2.43-1.89 1.12-2.83-.02-.02-.05-.03-.07-.05 1.9-1.09 3.67-2.45 5.17-4.04 1.57-1.66 2.95-3.74 2.03-5.89 1.04-.12 2.07-.26 3.1-.43 2.35-.38 4.88-1.28 6.62-2.98 1.7-1.65 2.19-4.06.61-5.97-1.64-1.98-4.5-2.38-6.89-2.76-.34-.06-.68-.1-1.02-.15 1.21-.26 2.42-.52 3.62-.81 2.63-.62 5.4-1.54 7.39-3.52zm-34.5 47.15c-.13-.12-.27-.22-.42-.31.61.05 1.21.13 1.81.26-.33.23-.67.44-1.02.62-.07-.19-.18-.39-.37-.57zm-3.49-.16c-1.44.86-2.96 1.5-4.52 1.95-.41-.02-.82-.05-1.22-.09 1.84-1.05 3.88-1.73 5.97-1.97-.08.04-.16.07-.23.11zm35.34-51.62c-.2 2.09-1.86 3.41-3.71 4.09-1.95.72-4.02 1.13-6.06 1.53 1.35-1.45 2.46-3.27 1.56-4.97-.64-1.2-2.16-1.91-3.33-2.45-1.31-.61-2.7-1.09-4.1-1.43-2.81-.69-5.72-.92-8.61-.97a81.41 81.41 0 0 0-35.65 7.65c-.21.1-.43.2-.64.3-1.04-.75-1.93-1.68-2.38-2.88-.07-.19-.12-.37-.16-.56l.3-.12c2.37-1 4.77-1.91 7.2-2.73a104.3 104.3 0 0 1 13.04-3.46 136.108 136.108 0 0 0 26.67-1.59c1.75.19 3.48.46 5.19.87 2.37.56 4.66 1.34 6.82 2.46 1.71.87 4.08 1.99 3.86 4.26zM48.09 64.82c-1.66 0-3.35-.06-5.04-.19.11-.04.23-.09.33-.13 2.77-1.05 5.72-1.44 8.67-1.21 1.33.1 2.65.35 3.94.72-2.59.57-5.25.81-7.9.81zM27.96 46.99c-1.83-.77-4.63-1.73-5.77-3.49-.57-.89-.21-1.6.46-2.17 5.5 2.48 11.59 3.13 17.55 3.44 1.11.06 2.23.08 3.35.11-1.45.49-2.89 1.03-4.31 1.62-3.62.47-7.31.74-10.96.61-.11-.04-.22-.08-.32-.12zm28.32-5.97c-5.55.38-11.13.37-16.69.03-4.12-.26-8.35-.71-12.26-2.14 1.51-.67 3.03-1.31 4.58-1.88 4.89-1.8 9.94-3.08 15.09-3.83 4.91-.71 9.94-1.01 14.89-.6 2.31.19 4.67.6 6.8 1.56.52.23 1.25.49 1.68.87.36.32.39.29.13.74-.49.9-1.39 1.68-2.15 2.35-.85.74-1.78 1.37-2.76 1.92-3.09.44-6.2.77-9.31.98zM37.15 20.99a96.609 96.609 0 0 1 26.45-5.27c2.37-.13 4.76-.19 7.12-.1.49.02.99.05 1.48.13a182.825 182.825 0 0 1-35.05 5.24zm-11.11 4.64c1.22.18 2.45.36 3.67.51-2.62.78-5.2 1.67-7.75 2.65 1.12-1.28 2.53-2.3 4.08-3.16zm41.18-14.89c2.37.03 4.77.01 7.13.21 1.44.12 2.94.36 4.24 1.02 3.45 1.76 2.25 5.83-.76 7.38-1.87.96-4.06 1.29-6.1 1.7-1.3.26-2.6.5-3.91.71a68.63 68.63 0 0 0-4.97-.27c2.18-.42 4.36-.86 6.52-1.36a217.8 217.8 0 0 0 8.28-2.08c1.04-.29 1.92-1.37 1.43-2.44-1.05-2.29-3.58-3.15-5.91-3.47-2.71-.38-5.56-.19-8.28-.07-6.2.27-12.35 1.07-18.39 2.46-5.97 1.38-11.81 3.23-17.44 5.66-.79.34-1.61.69-2.45 1.06-1.49-.01-2.97-.04-4.46-.08-.89-.17-1.78-.35-2.67-.54-1.95-.43-4.47-.67-6.13-1.89-.62-.46-1.09-1.16-1.18-1.93-.01-.11 0-.19.01-.29 2.83-1.28 5.91-1.99 8.97-2.52 10.02-1.71 20.26-2.58 30.41-3.02 5.22-.23 10.44-.31 15.66-.24zM14.55 44.25c-1.51-.65-3.9-1.52-3.84-3.54.06-1.86 2.03-3.41 3.44-4.31.6-.38 1.23-.73 1.88-1.06.62 1.43 1.67 2.7 2.96 3.76-.68.56-1.26 1.22-1.65 2.01-.79 1.62-.41 3.1.48 4.34-1.11-.33-2.2-.73-3.27-1.2zM68.1 56.12c.04.8-.74 1.52-1.25 2.06-.69.73-1.44 1.43-2.24 2.04-.9.69-1.87 1.27-2.89 1.79-6.25-2.92-13.63-3.23-20.15-.76-1.58.6-3.35 1.4-4.95 2.44-.22-.05-.44-.09-.66-.15-2.17-.53-5.22-1.78-5.93-3.98.75-.73 1.69-1.33 2.37-1.79 2.4-1.63 4.99-2.96 7.7-3.97 5.34.73 10.74 1.13 16.13 1.2 3.66.05 7.4.02 11.11-.2.44.35.74.79.76 1.32zm10.92-7.82c-.4 1.17-2.33 1.75-3.35 1.96-2.14.44-4.4.58-6.61.72-1.14-.53-2.37-.92-3.51-1.28-2.63-.82-5.36-1.34-8.09-1.62-1.76-.18-3.54-.23-5.33-.19 3.88-.77 7.81-1.59 11.52-2.95 1.72-.03 3.43-.02 5.15.09 2.35.15 4.69.43 7.01.87 1.12.23 3.82.64 3.21 2.4z" />
  </svg>
)