import "./home.css"

const HomePage = () => {
  return (
    <>
      <div className="tinas-masthead">
        <div className="tinas-masthead-bg-container">
          <img
            className="tinas-masthead-bg"
            src="https://i.ibb.co/zZC8sF9/whitney-wright-q-Kx-ELx-IH5t8-unsplash.jpg"
            alt="whitney-wright-q-Kx-ELx-IH5t8-unsplash"
          />
        </div>
        <div className="tinas-masthead-title">
          tina's bananas
          <br />
          about banana bread.
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          className="tinas-masthead-down-icon"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
          />
        </svg>
      </div>
      <div className="tinas-section">
        <div className="tinas-section-title">
          banana bread like you've never had before.
        </div>
        <div className="tinas-section-text">
          Banana bread recipes began being featured in well-known cookbooks
          across North America as baking soda and baking powder were being mass
          produced and becoming available in grocery stores in the 1930s. It
          appeared in Pillsbury's 1933 Balanced Recipes cookbook, and later
          gained more acceptance with the release of the original Chiquita
          Banana's Recipe Book in 1950.
        </div>
      </div>
      <div className="tinas-section bg-1">
        <div className="tinas-section-title">celebrating banana bread</div>
        <div className="tinas-section-text">
          National Banana Bread Day is February 23. Bananas appeared in the US
          in the 1870s and it took a while for them to appear as ingredient
          items for desserts. The modern banana bread recipe began being
          published in cookbooks around the 1930s and its popularity was greatly
          helped by the introduction of baking powder on the market. Some food
          historians believe banana bread was a byproduct of the Great
          Depression as resourceful housewives did not wish to throw away
          overripe bananas (as they were still a costly item to purchase),
          others believe the modern banana bread was developed in corporate
          kitchens to promote flour and baking soda products. It could also be a
          combination of both theories, insofar as being developed in a
          corporate kitchen to promote flour and baking soda products, as well
          as marketed as a method to make use of overripe bananas.
        </div>
      </div>
    </>
  );
};

export default HomePage;
