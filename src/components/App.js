import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import Shirts from './Shirts';
import Masks from './Masks';
import ShirtsChild from './ShirtsChild';
import ShirtsWomen from './ShirtsWomen';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shirts />} />
        <Route path="shirtswomen" element={<ShirtsWomen />} />
        <Route path="shirtschild" element={<ShirtsChild />} />
        <Route path="masks" element={<Masks />} />
        <Route path="*" element={<Shirts />} />
      </Route>
    </Routes>
  );
};

export default App;
