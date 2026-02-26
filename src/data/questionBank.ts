/* =====================================================
   questionBank.ts — Ngân hàng câu hỏi Lịch sử Đảng
   
   12 câu hỏi đa dạng hình thức, chia theo độ khó:
   - 4 câu Dễ (+5)   : C1-C4
   - 4 câu Vừa (+10) : C5-C8
   - 3 câu Khó (+15) : C9-C11
   - 1 câu Siêu khó (+20) : C12
   ===================================================== */

import type { Question } from '../types';

export const questionBank: Question[] = [
  // ════════════════════════════════════════════════════
  // 4 câu DỄ (+5/câu)
  // ════════════════════════════════════════════════════
  {
    id: 'C1',
    difficulty: 'easy',
    format: 'mcq',
    content: 'Đảng Cộng sản Việt Nam được thành lập vào năm nào?',
    options: [
      { label: 'A', text: '1925' },
      { label: 'B', text: '1929' },
      { label: 'C', text: '1930' },
      { label: 'D', text: '1931' },
    ],
    answer: 'C',
  },
  {
    id: 'C2',
    difficulty: 'easy',
    format: 'mcq',
    content: 'Ai là người chủ trì Hội nghị hợp nhất các tổ chức cộng sản đầu năm 1930?',
    options: [
      { label: 'A', text: 'Trần Phú' },
      { label: 'B', text: 'Nguyễn Ái Quốc' },
      { label: 'C', text: 'Lê Hồng Phong' },
      { label: 'D', text: 'Phan Bội Châu' },
    ],
    answer: 'B',
  },
  {
    id: 'C3',
    difficulty: 'easy',
    format: 'fill-blank',
    content: 'Hoàn thành câu: Hội nghị hợp nhất họp tại ______ (địa điểm) – ______ (lãnh thổ), thời gian ______ đến ______ năm 1930.',
    answer: 'Cửu Long – Hồng Kông; 6/1 đến 7/2',
    explanation: 'Hội nghị họp tại Cửu Long (Kowloon), thuộc Hồng Kông, từ ngày 6/1 đến 7/2/1930.',
  },
  {
    id: 'C4',
    difficulty: 'easy',
    format: 'mcq',
    content: 'Cương lĩnh chính trị đầu tiên thể hiện chủ yếu qua cặp văn kiện nào?',
    options: [
      { label: 'A', text: 'Luận cương chính trị & Điều lệ Đảng' },
      { label: 'B', text: 'Chánh cương vắn tắt & Sách lược vắn tắt' },
      { label: 'C', text: 'Tuyên ngôn độc lập & Chỉ thị Nhật–Pháp' },
      { label: 'D', text: 'Đường Kách mệnh & Bản án chế độ thực dân' },
    ],
    answer: 'B',
  },

  // ════════════════════════════════════════════════════
  // 4 câu VỪA (+10/câu)
  // ════════════════════════════════════════════════════
  {
    id: 'C5',
    difficulty: 'medium',
    format: 'mcq',
    content: 'Tổ hợp nào phản ánh đúng nhất ý nghĩa lịch sử của việc thành lập ĐCSVN?',
    options: [
      { label: 'A', text: 'Chấm dứt khủng hoảng đường lối; mở bước ngoặt lịch sử; gắn cách mạng VN với cách mạng vô sản thế giới' },
      { label: 'B', text: 'Thay thế toàn bộ phong trào yêu nước; loại bỏ liên minh quần chúng; chỉ dựa vào ngoại viện' },
      { label: 'C', text: 'Xóa bỏ ngay mọi giai cấp; thiết lập độc lập tức thời; kết thúc chiến tranh thế giới' },
      { label: 'D', text: 'Mở rộng nghị trường hợp pháp; giải quyết khủng hoảng kinh tế; đưa VN thành thuộc địa kiểu mới' },
    ],
    answer: 'A',
  },
  {
    id: 'C6',
    difficulty: 'medium',
    format: 'mcq',
    content: 'Đỉnh cao của phong trào cách mạng 1930–1931 gắn với sự kiện nào?',
    options: [
      { label: 'A', text: 'Mặt trận Dân chủ Đông Dương ra đời' },
      { label: 'B', text: 'Xô viết Nghệ Tĩnh' },
      { label: 'C', text: 'Đại hội I của Đảng (1935)' },
      { label: 'D', text: 'Đông Dương đại hội' },
    ],
    answer: 'B',
  },
  {
    id: 'C7',
    difficulty: 'medium',
    format: 'true-false',
    content: 'Phong trào dân chủ 1936–1939 đặt mục tiêu trực tiếp là "giành độc lập hoàn toàn ngay lập tức".',
    answer: 'Sai',
    explanation: 'Mục tiêu trước mắt là tự do – dân chủ – cơm áo – hòa bình, chống phản động thuộc địa và tay sai.',
  },
  {
    id: 'C8',
    difficulty: 'medium',
    format: 'multi-select',
    content: 'Đâu là các ý đúng về Cương lĩnh chính trị đầu tiên (1930)?',
    options: [
      { label: 'A', text: 'Mục tiêu chiến lược: tư sản dân quyền + thổ địa cách mạng → xã hội cộng sản' },
      { label: 'B', text: 'Nhiệm vụ trước mắt: đánh đổ đế quốc Pháp và phong kiến, giành độc lập' },
      { label: 'C', text: 'Lực lượng nòng cốt: công–nông' },
      { label: 'D', text: 'Chủ trương đấu tranh chỉ theo con đường nghị trường hợp pháp' },
      { label: 'E', text: 'Có nêu định hướng xã hội–kinh tế như bình quyền, phổ thông giáo dục…' },
    ],
    answer: 'A, B, C, E',
    explanation: 'Đáp án D sai vì Cương lĩnh không chủ trương chỉ dùng con đường nghị trường hợp pháp.',
  },

  // ════════════════════════════════════════════════════
  // 3 câu KHÓ (+15/câu)
  // ════════════════════════════════════════════════════
  {
    id: 'C9',
    difficulty: 'hard',
    format: 'mcq',
    content: 'So sánh nào đúng nhất giữa phong trào 1930–1931 và 1936–1939?',
    options: [
      { label: 'A', text: '1930–31: không có vai trò lãnh đạo của Đảng; 1936–39: Đảng mới bắt đầu xuất hiện' },
      { label: 'B', text: '1930–31: đấu tranh quyết liệt, đỉnh cao Xô viết; 1936–39: mục tiêu dân chủ–dân sinh–hòa bình, hình thức công khai/hợp pháp đa dạng' },
      { label: 'C', text: '1930–31: chủ yếu nghị trường hợp pháp; 1936–39: chỉ bí mật và vũ trang' },
      { label: 'D', text: '1930–31: mục tiêu dân chủ–dân sinh; 1936–39: mục tiêu lập chính quyền Xô viết ngay' },
    ],
    answer: 'B',
  },
  {
    id: 'C10',
    difficulty: 'hard',
    format: 'mcq',
    content: 'Lý do nào giải thích đầy đủ nhất việc Đảng điều chỉnh chủ trương/sách lược qua các giai đoạn 1930–1931, 1932–1935, 1936–1939?',
    options: [
      { label: 'A', text: 'Do chủ trương chỉ dựa vào đấu tranh nghị trường nên phải thay đổi liên tục' },
      { label: 'B', text: 'Do thay đổi hoàn toàn mục tiêu chiến lược, bỏ độc lập dân tộc để chuyển sang mục tiêu kinh tế' },
      { label: 'C', text: 'Do nội bộ Đảng mất thống nhất về đường lối nên thay đổi theo từng nhóm lãnh đạo' },
      { label: 'D', text: 'Bối cảnh quốc tế thay đổi + mức đàn áp & tương quan lực lượng thay đổi + yêu cầu khôi phục tổ chức + nhu cầu mở rộng mặt trận tập hợp lực lượng' },
    ],
    answer: 'D',
  },
  {
    id: 'C11',
    difficulty: 'hard',
    format: 'mcq',
    content: 'Trình tự thời gian nào đúng nhất (sớm → muộn)?\n(1) Đại hội I của Đảng (Ma Cao)\n(2) Hội nghị hợp nhất thành lập Đảng\n(3) Lập Mặt trận Dân chủ Đông Dương\n(4) Công bố Chương trình hành động khôi phục phong trào\n(5) Hoàn tất thống nhất khi Đông Dương CS Liên đoàn gia nhập',
    options: [
      { label: 'A', text: '2 → 4 → 5 → 1 → 3' },
      { label: 'B', text: '2 → 5 → 1 → 4 → 3' },
      { label: 'C', text: '5 → 2 → 4 → 3 → 1' },
      { label: 'D', text: '2 → 5 → 4 → 1 → 3' },
    ],
    answer: 'D',
  },

  // ════════════════════════════════════════════════════
  // 1 câu SIÊU KHÓ (+20)
  // ════════════════════════════════════════════════════
  {
    id: 'C12',
    difficulty: 'expert',
    format: 'mcq',
    content: 'Nhận định nào đúng nhất về mối quan hệ giữa Cương lĩnh 2/1930 và chủ trương đấu tranh thời kỳ 1936–1939?',
    options: [
      { label: 'A', text: 'Cương lĩnh đặt độc lập làm trung tâm; giai đoạn 1936–1939 chỉ điều chỉnh mục tiêu trước mắt (dân chủ–dân sinh–hòa bình) và hình thức đấu tranh, không đổi mục tiêu chiến lược.' },
      { label: 'B', text: 'Cương lĩnh ưu tiên ruộng đất hơn độc lập; giai đoạn 1936–1939 chuyển sang độc lập ngay lập tức và chỉ dùng bí mật–vũ trang, nên thể hiện sự thay đổi hoàn toàn về đường lối.' },
      { label: 'C', text: 'Cương lĩnh xác định công–nông là nòng cốt; giai đoạn 1936–1939 thay bằng tư sản và địa chủ làm lực lượng chính, nhằm hợp pháp hóa đấu tranh nên mục tiêu độc lập bị tạm gác vô thời hạn.' },
      { label: 'D', text: 'Cương lĩnh chủ trương đánh đổ đế quốc và phong kiến ngay; giai đoạn 1936–1939 chuyển hẳn sang đấu tranh nghị trường hợp pháp là duy nhất, vì vậy chứng tỏ Cương lĩnh ban đầu không còn phù hợp thực tiễn.' },
    ],
    answer: 'A',
    explanation: '1936–1939 là điều chỉnh sách lược / mục tiêu trước mắt và phương thức để mở rộng lực lượng, không phải thay mục tiêu chiến lược đã nêu trong Cương lĩnh.',
  },
];

/**
 * Lookup a question by its ID.
 * Returns undefined if not found (app will use manual grading mode).
 */
export function getQuestionById(questionId: string): Question | undefined {
  return questionBank.find((q) => q.id === questionId);
}
