import slugify from "slugify";

function removeVietnameseAccents(str: string): string {
  const vietnameseAccents = [
    { base: "a", letters: "áàảãạăắằẳẵặâấầẩẫậ" },
    { base: "e", letters: "éèẻẽẹêếềểễệ" },
    { base: "i", letters: "íìỉĩị" },
    { base: "o", letters: "óòỏõọôốồổỗộơớờởỡợ" },
    { base: "u", letters: "úùủũụưứừửữự" },
    { base: "y", letters: "ýỳỷỹỵ" },
    { base: "d", letters: "đ" },
  ];

  // Duyệt qua từng nhóm ký tự có dấu và thay thế chúng bằng ký tự không dấu
  vietnameseAccents.forEach((group) => {
    const regex = new RegExp(`[${group.letters}]`, "g");
    str = str.replace(regex, group.base);
  });

  return str;
}

export const buildSlug = (str: string): string => {
  const normalizedStr = removeVietnameseAccents(str).toLowerCase(); // Chuyển thành chữ thường trước khi chuyển sang slug
  return slugify(normalizedStr, {
    replacement: "-",
    remove: undefined,
    lower: true, // Giữ tùy chọn này để đảm bảo chuyển thành chữ thường nếu cần thiết
    strict: true,
    locale: "en",
    trim: true,
  });
};
