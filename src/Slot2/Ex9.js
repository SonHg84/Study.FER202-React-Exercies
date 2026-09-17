import React from 'react';

// Bài 1
export const MyProfile = () => {
  return (
    <div className="mb-4">
      <h2>Hoàng Văn Sơn</h2>
      <p>Xin chào, mình hiện đang theo học chuyên ngành Kỹ thuật phần mềm tại Đại học FPT.</p>
    </div>
  );
};

// Bài 2
export const HelloWorld = () => {
  return <h2 className="mb-4">Hello, World!</h2>;
};

import React, { useState } from 'react';

// Bài 3
export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="mb-4">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

// Bài 4
import React from 'react';

// Các "leaf" components (Component lá)
const Title = ({ text }) => <h4 style={{ margin: 0, color: '#e67e22' }}>{text}</h4>;
const Description = ({ text }) => <p style={{ margin: 0, fontSize: '14px' }}>{text}</p>;
const Image = ({ url }) => <img src={url} alt="Logo" style={{ width: '80px', height: 'auto' }} />;

// Wrapper component
export const SimpleCard = ({ item }) => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      border: '1px solid #ddd', 
      padding: '15px', 
      width: '350px',
      marginBottom: '20px'
    }}>
      <div style={{ marginRight: '15px' }}>
        <Image url={item.imageUrl} />
      </div>
      <div>
        <Title text={item.title} />
        <Description text={item.description} />
      </div>
    </div>
  );
};

// Mẫu dữ liệu để test Bài 4 trong App.js:
// const cardData = {
//   title: 'Hoàng Văn Sơn - FPT Hà Nội',
//   description: 'Software Engineering',
//   imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_logo_2010.svg'
// };
// <SimpleCard item={cardData} />

// Bài 5
import React from 'react';

export const SimpleWebsite = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', border: '1px solid #ccc' }}>
      <header style={{ backgroundColor: '#e67e22', padding: '20px', textAlign: 'center', color: 'white' }}>
        <h2>FPT UNIVERSITY</h2>
        <nav style={{ fontSize: '14px' }}>Home | About | Contact</nav>
      </header>

      <main style={{ padding: '40px 20px', textAlign: 'center' }}>
        <section style={{ marginBottom: '30px' }}>
          <h4>About</h4>
          <p style={{ color: '#555' }}>This is the about section of the website.</p>
        </section>
        
        <section>
          <h4>Contact</h4>
          <p style={{ color: '#555' }}>For any inquiries, please contact us at example@example.com.</p>
        </section>
      </main>

      <footer style={{ backgroundColor: '#f1c40f', padding: '15px', textAlign: 'center', color: 'white' }}>
        <small>© 2026 Website. All rights reserved.</small>
      </footer>
    </div>
  );
};