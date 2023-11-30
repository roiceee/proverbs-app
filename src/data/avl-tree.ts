import AVLTree from "avl";
import data from "./proverbs.json";
import VerseData from "../types/verse-type";

const tree: AVLTree<number, VerseData[]> = new AVLTree();

data.forEach((verse) => {
  tree.insert(parseInt(verse.chapter), verse.verses);
});

export default tree;
