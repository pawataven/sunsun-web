export function showToast(message: string) {
	const toast = document.querySelector<HTMLDivElement>('#toast');
	if (!toast) return;
	toast.textContent = message;
	toast.classList.remove('opacity-0');
	setTimeout(() => toast.classList.add('opacity-0'), 2000);
}

export async function copyToClipboard(text: string, successMessage: string) {
	try {
		await navigator.clipboard.writeText(text);
		showToast(successMessage);
	} catch {
		showToast('คัดลอกไม่สำเร็จ');
	}
}
