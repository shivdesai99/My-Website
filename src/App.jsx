import React from 'react';
import Introduction from './Introduction';

const App = () => {
  return (
    <div>
      <Introduction />
      <div id="next-section" style={{ height: '100vh', backgroundColor: '#e0e0e0' }}>
        {/* Your next section content */}
      </div>
    </div>
  );
};

export default App;