export function shortText(text: string): string {
    const cut = text.split(' ');
  
    const firstsWords = cut.slice(0, 40);
    const newText = firstsWords.join(' ');
  
    return newText;
  }