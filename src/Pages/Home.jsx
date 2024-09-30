import CountryList from "../components/CountryList";
import RegionMenue from "../components/RegionMenu";
import SearchInput from "../components/SearchInput";
import ShowMessage from "../components/ShowMessage";
import { useFetchData } from "../useFetchData";

const Home = () => {
  const {
    result,
    filteredCountries,
    isError,
    isLoading,
    setFilteredCountries,
  } = useFetchData();

  return (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenue
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
          </div>
          <CountryList data={filteredCountries} />
        </>
   
  );
};

export default Home;
