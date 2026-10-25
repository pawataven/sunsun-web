export interface NavLink {
	label: string;
	href: string;
}

export interface ProductCategoryLink extends NavLink {
	description: string;
}

export const productCategories: ProductCategoryLink[] = [
	{ label: 'ไวนิล', href: '/products/vinyl', description: 'ป้ายไวนิลสำหรับงานในร่มและกลางแจ้ง' },
	{ label: 'แบคดรอป', href: '/products/backdrop', description: 'ฉากหลังสำหรับงานอีเวนต์และถ่ายภาพ' },
	{ label: 'โรลอัพ', href: '/products/roll-up', description: 'ป้ายตั้งพกพาสะดวก ประกอบง่าย' },
	{ label: 'ป้ายโฆษณา', href: '/products/signage', description: 'ป้ายหน้าร้านและป้ายประชาสัมพันธ์' },
	{ label: 'งานพิมพ์อื่น ๆ', href: '/products/printing', description: 'งานพิมพ์ประเภทอื่น ๆ ของร้าน' },
];

export const productsIndexLink: NavLink = { label: 'ดูสินค้าทั้งหมด', href: '/products' };

export const pageLinks = {
	home: { label: 'หน้าแรก', href: '/' },
	gallery: { label: 'ผลงาน', href: '/gallery' },
	howToOrder: { label: 'ขั้นตอนสั่งผลิต', href: '/how-to-order' },
	contact: { label: 'ติดต่อเรา', href: '/contact' },
	order: { label: 'เช็กราคา / สั่งพิมพ์', href: '/order' },
	line: { label: 'LINE', href: '/line' },
} satisfies Record<string, NavLink>;
