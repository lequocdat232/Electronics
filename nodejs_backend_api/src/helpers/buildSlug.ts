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

// Ví dụ sử dụng
const input = "Chào bạn, bạn khỏe không?";
const output = removeVietnameseAccents(input);
console.log(output); // "Chao ban, ban khoe khong?"
