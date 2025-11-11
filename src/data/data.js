const beverageList = [
  {
    id: "1",
    image: "./public/images/พัดลม.webp", 
    name: "พัดลม",
    description: "พัดลมขนาด 16 นิ้ว ให้ลมแรง เสียงเงียบ ประหยัดไฟเบอร์ 5",
    price: "฿890"
  },
  {
    id: "2",
    image: "./public/images/ตู้เย็น.jfif",
    name: "ตู้เย็น",
    description: "ตู้เย็น 2 ประตู 6.5 คิว เย็นไว ประหยัดพลังงาน",
    price: "฿8,500"
  },
  {
    id: "3",
    image: "./public/images/ทีวี.jfif",
    name: "ทีวี",
    description: "Smart TV 43 นิ้ว ความละเอียด Full HD",
    price: "฿10,900"
  },
  {
    id: "4",
    image: "./public/images/โน๊ตบุ๊ค.jpg",
    name: "โน๊ตบุ๊ค",
    description: "โน๊ตบุ๊คสเปกกลาง Intel Core i5 RAM 8GB SSD 512GB",
    price: "฿18,900"
  },
  {
    id: "5",
    image: "./public/images/คอม.webp",
    name: "คอมพิวเตอร์",
    description: "คอมพิวเตอร์ตั้งโต๊ะสำหรับทำงานทั่วไป",
    price: "฿22,500"
  },
  {
    id: "6",
    image: "./public/images/คีบอร์ด.jfif",
    name: "คีบอร์ด",
    description: "คีย์บอร์ด Mechanical ปุ่มสัมผัสนุ่ม เสียงเบา",
    price: "฿790"
  },
  {
    id: "7",
    image: "./public/images/เมาส์.jfif",
    name: "เมาส์",
    description: "เมาส์ไร้สาย ความละเอียดสูง จับถนัดมือ",
    price: "฿590"
  },
  {
    id: "8",
    image: "./public/images/เตารีด.jpg",
    name: "เตารีด",
    description: "เตารีดไอน้ำ กำลังไฟแรง รีดลื่นทุกผ้า",
    price: "฿1,290"
  },
  {
    id: "9",
    image: "./public/images/ไมโครเวฟ.webp",
    name: "ไมโครเวฟ",
    description: "ไมโครเวฟ 20 ลิตร ใช้งานง่าย ปุ่มหมุน",
    price: "฿2,490"
  },
  {
    id: "10",
    image: "./public/images/เครื่องปั่น.jpg",
    name: "เครื่องปั่นน้ำ",
    description: "เครื่องปั่นน้ำผลไม้ โถแก้ว ทนทาน",
    price: "฿1,290"
  },
  {
    id: "11",
    image: "./public/images/เครื่องซักผ้า.jfif",
    name: "เครื่องซักผ้า",
    description: "เครื่องซักผ้าฝาบน 10 กก. ระบบถังซักหมุนเร็ว",
    price: "฿9,500"
  },
  {
    id: "12",
    image: "./public/images/เครื่องดูดฝุ่น.webp",
    name: "เครื่องดูดฝุ่น",
    description: "เครื่องดูดฝุ่นพลังแรง ดูดสะอาดทุกซอก",
    price: "฿3,200"
  },
  {
    id: "13",
    image: "./public/images/เครื่องทำน้ำอุ่น.jfif",
    name: "เครื่องทำน้ำอุ่น",
    description: "เครื่องทำน้ำอุ่น 4500W ปลอดภัย มาตรฐาน มอก.",
    price: "฿2,790"
  },
  {
    id: "14",
    image: "./public/images/ที่หนีบผม.webp",
    name: "ที่หนีบผม",
    description: "ที่หนีบผมแผ่นเซรามิก ร้อนเร็ว ไม่ทำลายเส้นผม",
    price: "฿1,090"
  },
  {
    id: "15",
    image: "./public/images/แอร์.webp",
    name: "แอร์",
    description: "แอร์ 12000 BTU เย็นเร็ว เงียบ ประหยัดไฟเบอร์ 5",
    price: "฿15,900"
  },
  {
    id: "16",
    image: "./public/images/ที่โกนหนวด.webp",
    name: "ที่โกนหนวด",
    description: "ที่โกนหนวดไฟฟ้าแบบชาร์จได้ ใช้งานง่าย",
    price: "฿990"
  },
  {
    id: "17",
    image: "./public/images/ลำโพง.jpg",
    name: "ลำโพง",
    description: "ลำโพง Bluetooth พกพา เสียงดังชัดแจ๋ว",
    price: "฿1,590"
  },
  {
    id: "18",
    image: "./public/images/หม้อทอดไร้นำมัน.webp",
    name: "หม้อทอดไร้น้ำมัน",
    description: "หม้อทอดไร้น้ำมัน ขนาด 4 ลิตร ทำอาหารสุขภาพง่าย ๆ",
    price: "฿2,990"
  },
  {
    id: "19",
    image: "./public/images/เตาอบขนมปัง.jpg",
    name: "เตาอบขนม",
    description: "เตาอบขนม 30 ลิตร อบขนมได้ทั่วถึง",
    price: "฿3,990"
  },
  {
    id: "20",
    image: "./public/images/เตา.jfif",
    name: "เตาไฟฟ้า",
    description: "เตาแม่เหล็กไฟฟ้า ปรับอุณหภูมิได้ 8 ระดับ",
    price: "฿1,790"
  }
];

export default beverageList;