import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import Shirts from './Shirts';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shirts />} />
        <Route path="*" element={<Shirts />} />
      </Route>
    </Routes>
  );
};

export default App;
