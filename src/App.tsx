import MenuCard from './components/menuCard';
import HomepageContainer from './components/homepageContainer';

export default function App() {
  return (
    <HomepageContainer>
      <MenuCard text="Characters" destination="/character/" icon="ra-double-team" />
      <MenuCard text="Magic" destination="/magic/" icon="ra-book" />
      <MenuCard text="Extra" destination="/extra/" icon="ra-cog" />
    </HomepageContainer>
  );
}

