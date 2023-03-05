export class Question {
  /**
   * 
   * @param {string} text this is the text of the questions
   * @param {string[]} choices this are the choices of the question
   * @param {string} answer this is answer of the questions
   */
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   * 
   * @param {string} choice some text to quest
   * @returns {boolean} return true if the answer is correct
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}