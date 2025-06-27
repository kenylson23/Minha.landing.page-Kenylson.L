export default function Home() {
  console.log('Home component is rendering');
  
  // Force re-render and debug
  setTimeout(() => {
    console.log('DOM content after render:', document.getElementById('root')?.innerHTML);
  }, 1000);
  
  return (
    <div 
      id="portfolio-content"
      style={{ 
        backgroundColor: '#000000', 
        color: '#00ff00', 
        minHeight: '100vh', 
        padding: '40px',
        position: 'relative',
        zIndex: 999
      }}
    >
      <h1 style={{ color: '#00ff00', fontSize: '4rem', marginBottom: '20px' }}>✅ KENYLSON LOURENÇO</h1>
      <p style={{ fontSize: '2rem', color: '#ffffff' }}>🚀 Desenvolvedor Web</p>
      <p style={{ fontSize: '1.5rem', marginTop: '20px', color: '#00ff00' }}>📞 Contato: +244 949639932</p>
      
      <div style={{ marginTop: '40px', border: '2px solid #00ff00', padding: '20px' }}>
        <h2 style={{ color: '#00ff00', fontSize: '2.5rem' }}>🎉 PORTFOLIO FUNCIONANDO!</h2>
        <p style={{ fontSize: '1.3rem', color: '#ffffff' }}>Se você vê esta mensagem, o React carregou corretamente!</p>
        <p style={{ fontSize: '1rem', color: '#888888', marginTop: '10px' }}>
          Timestamp: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
}