'use client';

export default function EarbudsRankPage() {
  const earbuds = [
    { id: 1, name: "Soundcore R50i NC", desc: "ตัดเสียงรบกวน (ANC) ดีเยี่ยมในราคานี้ เบสหนักสะใจ ประกัน 18 เดือน", price: "799.-", img: "https://m.media-amazon.com/images/I/51S2I-I-7bL._AC_SL1500_.jpg", link: "#" },
    { id: 2, name: "Moondrop Space Travel", desc: "ดีไซน์โปร่งใสแนวอวกาศ เสียงใสเคลียร์ มีโหมดตัดเสียงที่เงียบกริบ", price: "890.-", img: "https://m.media-amazon.com/images/I/5167z9SgZFL._AC_SL1000_.jpg", link: "#" },
    { id: 3, name: "OPPO Enco Buds2", desc: "ตัวเล็กกะทัดรัดแต่เสียงทรงพลัง เบสแน่น กันน้ำ IPX4 แบรนด์มาตรฐาน", price: "599.-", img: "https://m.media-amazon.com/images/I/51v655yX9fL._AC_SL1500_.jpg", link: "#" },
    { id: 4, name: "QCY T13 ANC 2", desc: "ไมโครโฟน 4 ตัว คุยชัดมาก ตัดเสียงลมได้ดี เหมาะกับสายโทร/ประชุม", price: "650.-", img: "https://m.media-amazon.com/images/I/61S9-XInX8L._AC_SL1500_.jpg", link: "#" },
    { id: 5, name: "SoundPEATS Clear", desc: "สวยล้ำเห็นวงจรข้างใน ดีเลย์ต่ำมาก (Game Mode) ใส่เล่นเกมได้ลื่นๆ", price: "699.-", img: "https://m.media-amazon.com/images/I/61M-pEAn+kL._AC_SL1500_.jpg", link: "#" },
    { id: 6, name: "Baseus Bowie WM02", desc: "หูฟังจิ๋วสีพาสเทล ใส่สบายหูไม่เจ็บ พกพาง่ายมาก เหมาะกับคนหูเล็ก", price: "450.-", img: "https://m.media-amazon.com/images/I/51U63vM9Z5L._AC_SL1200_.jpg", link: "#" },
    { id: 7, name: "Realme Buds T110", desc: "เชื่อมต่อไวมาก แบตเตอรี่อึดใช้งานได้ยาวนาน ดีไซน์ทันสมัย", price: "699.-", img: "https://m.media-amazon.com/images/I/51l6E7T8zAL._AC_SL1500_.jpg", link: "#" },
    { id: 8, name: "Edifier TWS1 Pro 2", desc: "คุณภาพเสียงระดับ Hi-Res ปรับ EQ ผ่านแอปได้ละเอียด งานประกอบพรีเมียม", price: "1,090.-", img: "https://m.media-amazon.com/images/I/51IInVz-RcL._AC_SL1500_.jpg", link: "#" },
    { id: 9, name: "AUKEY EP-M2", desc: "ทรง Earbuds ใส่สบายไม่จุกหู เสียงโปร่งกว้าง ฟังเพลงแนว Acoustic เพราะ", price: "550.-", img: "https://m.media-amazon.com/images/I/61Ff-G8M16L._AC_SL1500_.jpg", link: "#" },
    { id: 10, name: "Xiaomi Redmi Buds 6 Active", desc: "เรียบง่าย ใช้งานทนทาน แบตอึด เป็นมาตรฐานหูฟังราคาประหยัด", price: "490.-", img: "https://m.media-amazon.com/images/I/41-qU95qjWL._AC_SL1000_.jpg", link: "#" },
  ];

  return (
    <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', padding: '50px 20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.4rem', color: '#1a202c', margin: '0' }}>🎧 Top 10 หูฟังไร้สาย 2026</h1>
        <p style={{ color: '#718096', fontSize: '1.1rem', marginTop: '10px' }}>อัปเดตหูฟังตัวคุ้ม ราคาเป็นมิตร แต่คุณภาพจัดเต็ม</p>
      </header>

      <main style={{ maxWidth: '850px', margin: '0 auto' }}>
        {earbuds.map((item) => (
          <div key={item.id} style={{ 
            backgroundColor: 'white', borderRadius: '20px', display: 'flex', marginBottom: '25px', 
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', overflow: 'hidden'
          }}>
            {/* ฝั่งรูปภาพ */}
            <div style={{ width: '220px', minWidth: '220px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </div>

            {/* ฝั่งข้อมูล */}
            <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: '#3182ce', color: 'white', padding: '4px 14px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                  Rank {item.id}
                </div>
                <h2 style={{ fontSize: '1.5rem', color: '#2d3748', margin: '0' }}>{item.name}</h2>
              </div>
              <p style={{ color: '#4a5568', margin: '15px 0', lineHeight: '1.6' }}>{item.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#2f855a' }}>{item.price}</span>
                <a href={item.link} target="_blank" style={{ 
                  backgroundColor: '#ee4d2d', color: 'white', padding: '12px 25px', borderRadius: '10px', 
                  textDecoration: 'none', fontWeight: 'bold', fontSize: '1rem', transition: '0.2s'
                }}>
                  ดูดีลพิเศษใน Shopee
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}