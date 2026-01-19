# my-earbuds-rank'use client'; // แก้ปัญหา Runtime Error เรื่อง Event handlers

export default function EarbudsRankPage() {
  const earbuds = [
    { id: 1, name: "Soundcore R50i NC", desc: "ตัดเสียงรบกวน (ANC) ดีที่สุดในราคานี้ เบสหนักสะใจ ประกัน 18 เดือน", price: "799.-", img: "https://m.media-amazon.com/images/I/51S2I-I-7bL._AC_SL1500_.jpg", link: "#" },
    { id: 2, name: "Moondrop Space Travel", desc: "ดีไซน์โปร่งใสสุดเท่ เสียงใสเคลียร์ พร้อมโหมดตัดเสียงที่เงียบกริบ", price: "890.-", img: "https://m.media-amazon.com/images/I/5167z9SgZFL._AC_SL1000_.jpg", link: "#" },
    { id: 3, name: "OPPO Enco Buds2", desc: "ตัวเล็กกะทัดรัดแต่เสียงทรงพลัง กันน้ำ IPX4 เหมาะกับสายลุย", price: "599.-", img: "https://m.media-amazon.com/images/I/51v655yX9fL._AC_SL1500_.jpg", link: "#" },
    { id: 4, name: "QCY T13 ANC 2", desc: "ไมโครโฟน 4 ตัว คุยชัดมาก ตัดเสียงลมดีเยี่ยม เหมาะกับสายประชุม", price: "650.-", img: "https://m.media-amazon.com/images/I/61S9-XInX8L._AC_SL1500_.jpg", link: "#" },
    { id: 5, name: "SoundPEATS Clear", desc: "สวยล้ำเห็นวงจรข้างใน ดีเลย์ต่ำมาก (Game Mode) เล่นเกมลื่นๆ", price: "699.-", img: "https://m.media-amazon.com/images/I/61M-pEAn+kL._AC_SL1500_.jpg", link: "#" },
    { id: 6, name: "Baseus Bowie WM02", desc: "หูฟังจิ๋วใส่สบายเหมือนไม่ได้ใส่ สีพาสเทลน่ารัก พกพาสะดวก", price: "450.-", img: "https://m.media-amazon.com/images/I/51U63vM9Z5L._AC_SL1200_.jpg", link: "#" },
    { id: 7, name: "Realme Buds T110", desc: "เชื่อมต่อไว แบตเตอรี่อึดใช้งานได้ยาวนาน ดีไซน์ทันสมัย", price: "699.-", img: "https://m.media-amazon.com/images/I/51l6E7T8zAL._AC_SL1500_.jpg", link: "#" },
    { id: 8, name: "Edifier TWS1 Pro 2", desc: "คุณภาพเสียงระดับพรีเมียม ปรับ EQ ผ่านแอปได้ละเอียดมาก", price: "1,090.-", img: "https://m.media-amazon.com/images/I/51IInVz-RcL._AC_SL1500_.jpg", link: "#" },
    { id: 9, name: "AUKEY EP-M2", desc: "ทรง Earbuds ใส่สบายไม่จุกหู เสียงโปร่งกว้าง ฟังเพลงสบายๆ", price: "550.-", img: "https://m.media-amazon.com/images/I/61Ff-G8M16L._AC_SL1500_.jpg", link: "#" },
    { id: 10, name: "Xiaomi Redmi Buds 6 Active", desc: "เรียบง่าย ใช้งานทนทาน แบตอึด มาตรฐานหูฟังราคาประหยัด", price: "490.-", img: "https://m.media-amazon.com/images/I/41-qU95qjWL._AC_SL1000_.jpg", link: "#" },
  ];

  return (
    <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', padding: '50px 20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#1a202c', fontWeight: 'bold' }}>🎧 10 อันดับหูฟังราคาประหยัด 2026</h1>
        <p style={{ color: '#718096', fontSize: '1.1rem', marginTop: '10px' }}>รวมรุ่นคุ้มค่า งบหลักร้อยถึงพันต้นๆ ที่ดีที่สุดในตอนนี้</p>
      </header>

      <main style={{ maxWidth: '850px', margin: '0 auto' }}>
        {earbuds.map((item) => (
          <div key={item.id} style={{ 
            backgroundColor: 'white', borderRadius: '20px', display: 'flex', marginBottom: '25px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)', overflow: 'hidden', border: '1px solid #e2e8f0'
          }}>
            {/* รูปภาพด้านซ้าย */}
            <div style={{ width: '200px', minWidth: '200px', padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: 'auto', borderRadius: '10px', objectFit: 'contain' }} 
                   onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=No+Image"; }} />
            </div>

            {/* เนื้อหาด้านขวา */}
            <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ background: '#ff4757', color: 'white', padding: '3px 12px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  อันดับ {item.id}
                </span>
                <h2 style={{ fontSize: '1.4rem', color: '#2d3748', margin: '0' }}>{item.name}</h2>
              </div>
              <p style={{ color: '#4a5568', margin: '12px 0', fontSize: '0.95rem', lineHeight: '1.5' }}>{item.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2f855a' }}>{item.price}</span>
                <a href={item.link} target="_blank" style={{ 
                  backgroundColor: '#ee4d2d', color: 'white', padding: '10px 20px', borderRadius: '8px', 
                  textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem'
                }}>
                  เช็คราคาล่าสุด 🛒
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
