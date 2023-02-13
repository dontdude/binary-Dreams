import FileSaver from 'file-saver';     // library to save binary file like image, audio or other media in local storage 
import { dreamPrompts } from '../constant';

export function getRandomPrompt(prompt) {        // value of prompt is empty if nothing was entered in form
  // get a random number to access a random prompt
  const randomIndex = Math.floor(Math.random() * dreamPrompts.length);   
  const randomPrompt = dreamPrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);  // check for not getting same random prompt 2 times in a row

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);  // anchor tag with download attribute is not used, because it can only save a text based file like csv files.
}