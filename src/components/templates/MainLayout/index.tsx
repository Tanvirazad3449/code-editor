'use client';

// import Editor from '@/components/organisms/Editor';
// import Sidebar from '@/components/organisms/Sidebar';
// import { DirectoryTreeProvider } from '@/contexts/DirectoryTreeContext';
// import React, { useState } from 'react';

// const MainLayout: React.FC = () => {
//   const [leftWidth, setLeftWidth] = useState<number>(20);

//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     const newLeftWidth = (e.clientX / window.innerWidth) * 100;
//     if (newLeftWidth >= 20 && newLeftWidth <= 40) {
//       setLeftWidth(newLeftWidth);
//     }
//   };

//   const handleMouseUp = () => {
//     document.removeEventListener('mousemove', handleMouseMove);
//     document.removeEventListener('mouseup', handleMouseUp);
//   };

//   return (
//     <DirectoryTreeProvider>
//       <div className="flex h-screen">
//         <div
//           className="bg-blue-500"
//           style={{ width: `${leftWidth}%` }}
//         >
//           <Sidebar />
//         </div>
//         <div
//           className="bg-gray-500 cursor-col-resize"
//           onMouseDown={handleMouseDown}
//           style={{ width: '2px' }}
//         ></div>
//         <div
//           className="bg-green-500 flex-1"
//           style={{ width: `${100 - leftWidth}%` }}
//         >
//           <Editor />
//         </div>
//       </div>
//     </DirectoryTreeProvider>
//   );
// };

// export default MainLayout;




import React, { useState, ComponentType, CSSProperties } from 'react';

interface BoxProps {
  text: string;
  isHovered: boolean;
  isToggled: boolean;
}


// // Higher Order Component that contains the logic to detect the hover.
// function withHover<T>(WrappedComponent: ComponentType<T>) {
//   return function (props: Omit<T, 'isHovered'>) {
//     const [isHovered, setHovered] = useState(false);

//     function handleMouseEnter() {
//       setHovered(true);
//     }

//     function handleMouseLeave() {
//       setHovered(false);
//     }

//     return (
//       <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//         <WrappedComponent {...(props as T)} isHovered={isHovered} />
//       </div>
//     );
//   };
// }

// // Updated Text Component without the Hover Logic
// interface TextComponentProps {
//   text: string;
//   isHovered: boolean;
// }

// const TextComponent: React.FC<TextComponentProps> = ({ text, isHovered }) => {
//   return (
//     <p style={{ backgroundColor: isHovered ? 'blue' : 'white' }}>{text}</p>
//   );
// };

// // Updated Input Component without the Hover Logic
// interface InputComponentProps {
//   type: string;
//   isHovered: boolean;
// }

// const InputComponent: React.FC<InputComponentProps> = ({ type, isHovered }) => {
//   return (
//     <input
//       type={type}
//       style={{ backgroundColor: isHovered ? 'blue' : 'white', border: '2px solid gray' }}
//     />
//   );
// };

// // Creating components that contain hover logic using Higher Order Component.
// const TextComponentWithHover = withHover(TextComponent);
// const InputComponentWithHover = withHover(InputComponent);

// // Using the Components in our App
// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <TextComponentWithHover
//         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//         commodo consequat."
//       />

//       <InputComponentWithHover type="text" />
//     </div>
//   );
// };

// export default App;

// const Child = (...props:any) => {
//   return (
//     <p>{text}</p>
//     <p>{label}</p>

//   )
// }
// const Parent = () => {
//   return (
//     <div>
//       <p>
//         parent
//       </p>
//       <Child text="child text" label="child label"/>
//     </div>
//   )
// }
// export default Parent




interface TextComponentProps {
  text: string;
  isHovered: boolean;
  isToggled: boolean;
  foo: string;
  bar: string;
  style?: CSSProperties; 
}

// Higher Order Component that contains the logic to detect the hover and toggle.
function withHoverAndToggle<T>(WrappedComponent: ComponentType<T>) {
  return function (props: Omit<T, 'isHovered' | 'isToggled'>) {
    const [isHovered, setHovered] = useState(false);
    const [isToggled, setToggled] = useState(false);

    function handleMouseEnter() {
      setHovered(true);
    }

    function handleMouseLeave() {
      setHovered(false);
    }

    function handleClick() {
      setToggled(prevToggled => !prevToggled);
    }

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <WrappedComponent
          {...(props as T)}  // Spread original props: text="Text Component Text"
          isHovered={isHovered}  // Adding new props for hover and toggle state
          isToggled={isToggled}
        />
      </div>
    );
  };
}


function withTextGreen<T extends { style?: React.CSSProperties }>(WrappedComponent: ComponentType<T>) {
  return function (props: T) {
    return (
      
        <WrappedComponent
        {...props}  // Spread original props
        style={{ ...props.style, color: 'green' }}
        />
    );
  };
}

const TextComponent: React.FC<TextComponentProps & { style?: React.CSSProperties }> = ({ text, foo, bar, isHovered, isToggled, style }) => {
  return (
    <p
      style={{
        backgroundColor: isHovered ? 'blue' : 'white',
        fontWeight: isToggled ? 'bold' : 'normal',
        ...style  // Apply the passed style
      }}
    >
      {text} foo-{foo} bar-{bar}
    </p>
  );
};

const TextComponentWithHoverAndToggle = withHoverAndToggle(TextComponent);

const TextComponentWithGreenColor = withTextGreen(TextComponentWithHoverAndToggle)
const App: React.FC = () => {
  return (
    <div className="App">
      <TextComponentWithGreenColor
        text="Text Component Text"
        foo="foo text"
        bar="bar text"
      />

      <BoxComponentWithHoverAndToggle text='skjdnkjn'/>
    </div>
  );
};


const Box: React.FC<BoxProps> = ({ text, isHovered, isToggled }) => {
  return (
    <div style={{height: '200px', width: '200px', border: isToggled ? '2px solid red' : '1px solid black', backgroundColor: isHovered ? 'blue' : 'white', alignItems: 'center', justifyContent: 'center', padding:'20px'}}>
        {text}
      </div>
  );
};
const BoxComponentWithHoverAndToggle = withHoverAndToggle(Box);

export default App;
