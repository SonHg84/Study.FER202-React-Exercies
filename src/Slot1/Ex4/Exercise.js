import React from 'react';

// 1. Giao diện chứa Logo React
const Header = () => (
  <div style={{ textAlign: 'center' }}>
    <h1 style={{ color: 'blue', fontSize: 50 }}><span style={{ color: 'black', fontWeight: 200, fontSize: 40 }}>Hello</span> React</h1>
    <hr style={{ width: '60%' }} />
  
  </div>
);

const LogoWebsite = () => (
    <div style={{textAlign: 'center'}}>
    <img src="/ex4.png" alt="React Logo" style={{ width: '200px', textAlign: 'center' }} />
    <hr style={{ width: '60%' }} />
    
    </div>
)

// 2. Thanh Navbar
const Navbar = () => (
  <div style={{ backgroundColor: '#4b4b4b', padding: '10px', display: 'flex', alignItems: 'center', color: 'white' }}>
    <div style={{ backgroundColor: '#3cb371', padding: '10px 20px', marginRight: '15px' }}>Home</div>
    <div style={{ marginRight: '15px' }}>Search</div>
    <div style={{ marginRight: '15px' }}>Contact</div>
    <div style={{ backgroundColor: 'black', padding: '10px 20px' }}>Login</div>
    
  </div>
  
);

// 3. Hiển thị chữ "This is JSX"
const JsxText = () => (
  <div style={{fontSize: 20, marginLeft: 20}}>
      <hr style={{ width: '60%' }} />

  <h1 style={{ color: 'blue' }}>This is JSX</h1>
      <hr style={{ width: '60%' }} />

  </div>
);

// 4. Danh sách khoá học
const CourseList = () => (
  <div style={{fontSize: 20, marginLeft: 20}}>
    <h2>Course names</h2>
    <ul>
      <li>React</li>
      <li>ReactNative</li>
      <li>NodeJs</li>
    </ul>
  </div>
);

export default function Exercise() {
  return (
    <div>
      <Header />
      <LogoWebsite/>
      <Navbar />
      <JsxText />
      <CourseList />
    </div>
  );
}