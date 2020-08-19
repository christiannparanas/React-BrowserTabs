import React, {useState} from 'react';

function Tab({ children }) {
   const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 })
 
   function moveHighlight(e) {
     setHighlightStyle({ left: e.nativeEvent.layerX - 150 })
   }
 
   function hideHighlight() {
     setHighlightStyle({
       opacity: 0
     })
   }
 
   return (
     <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight} >
       <div className="highlight" style={ highlightStyle } />
       { children }
     </div>
   )
}

export default Tab;