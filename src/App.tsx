import './App.css';

import ToastProvider from './components/ToastProvider';

import useToast from './hooks/useToast';

function App() {
  const toast = useToast();
  return (
    <div className="App">
      <ToastProvider />

      <button onClick={() => toast.success('test')}>토스트 추가</button>
    </div>
  );
}

export default App;
