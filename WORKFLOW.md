# Workflow: Vague vs. Precise Comparison

## Round 1: Vague Prompt
- **Prompt:** "Create a profile settings form."
- **Nəticə:** AI çox sadə və natamam kod verdi.
- **Problem:** Validation, accessibility (ARIA), və tip təhlükəsizliyi (TypeScript) yox idi.
- **Review Effort:** Çox yüksək. Mən özüm əl ilə hər şeyi düzəltməli idim.

## Round 2: Precise Prompt
- **Prompt:** Mən AI-a detallı tələblər verdim (Zod, RHF, Accessibility, Folder Structure).
- **Nəticə:** Professional, test oluna bilən və genişləndirilə bilən kod.
- **Review Effort:** Çox aşağı. Kod birbaşa istifadəyə hazır idi.

## Əsas Dərslər (Key Learnings)
1. **Dəqiqlik:** AI-ın keyfiyyəti verdiyin promptun keyfiyyətinə bərabərdir.
2. **Arxitektura:** Validation (Zod) və Type-ların (Typescript) əvvəlcədən ayrılması proqramın saxlanılmasını (maintenance) asanlaşdırır.
3. **Zaman:** Round 2-ni yazmaq üçün promptu hazırlamaq bir az vaxt aldı, amma sonda kodun düzəldilməsinə sərf olunan vaxtı 90% azaltdı.

## AI Səhvi (Catching AI Mistake)
Round 2 zamanı AI bəzən sadə HTML `input`-larını istifadə etməyə çalışırdı, lakin mən `zodResolver` və `react-hook-form` istifadə etmək şərtini qoyduğum üçün o, öz səhvini düzəltməli oldu. Bu, "verification loop"un nə qədər vacib olduğunu göstərdi.