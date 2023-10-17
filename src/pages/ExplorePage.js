import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import CurrentPageWithInfo from "../components/CurrentPageWithInfo";
import { useState, useEffect } from "react";

const ExplorePage = () => {
  const [currentBest, setCurrentBest] = useState("");
  let userSelection = "";
  // Categories from the NYT api from API call:
  const categories = [
    "Select a Genre",
    "Combined Print and E-Book Fiction",
    "Combined Print and E-Book Nonfiction",
    "Hardcover Fiction",
    "Hardcover Nonfiction",
    "Trade Fiction Paperback",
    "Mass Market Paperback",
    "Paperback Nonfiction",
    "E-Book Fiction",
    "E-Book Nonfiction",
    "Hardcover Advice",
    "Paperback Advice",
    "Advice How-To and Miscellaneous",
    "Hardcover Graphic Books",
    "Paperback Graphic Books",
    "Manga",
    "Combined Print Fiction",
    "Combined Print Nonfiction",
    "Chapter Books",
    "Childrens Middle Grade",
    "Childrens Middle Grade E-Book",
    "Childrens Middle Grade Hardcover",
    "Childrens Middle Grade Paperback",
    "Paperback Books",
    "Picture Books",
    "Series Books",
    "Young Adult",
    "Young Adult E-Book",
    "Young Adult Hardcover",
    "Young Adult Paperback",
    "Animals",
    "Audio Fiction",
    "Audio Nonfiction",
    "Business Books",
    "Celebrities",
    "Crime and Punishment",
    "Culture",
    "Education",
    "Espionage",
    "Expeditions Disasters and Adventures",
    "Fashion Manners and Customs",
    "Food and Fitness",
    "Games and Activities",
    "Graphic Books and Manga",
    "Hardcover Business Books",
    "Health",
    "Humor",
    "Indigenous Americans",
    "Relationships",
    "Mass Market Monthly",
    "Middle Grade Paperback Monthly",
    "Paperback Business Books",
    "Family",
    "Hardcover Political Books",
    "Race and Civil Rights",
    "Religion Spirituality and Faith",
    "Science",
    "Sports",
    "Travel",
    "Young Adult Paperback Monthly",
  ];

  return (
    <div>
      <Header />
      <div class="bg-gradient-to-b from-teal-100 text-lg p-7 pb-0">
        <CurrentPageWithInfo
          page="Explore"
          info={"New York Time's Best Selling Books This Week"}
        />
      </div>
      <Dropdown
        categoryList={categories}
        dropdownPurpose="Genre"
        idName={"dropdown1"}
      />
    </div>
  );
};

export default ExplorePage;
