import MenuCard from '../components/menuCard';
import HomepageContainer from '../components/homepageContainer';

export default function Character() {
  return (
    <HomepageContainer>
      <MenuCard text="Classes" destination="/character/classes" icon="ra-double-team" />
      <MenuCard text="Races" destination="/character/races" icon="ra-book" />
      <MenuCard text="Specs" destination="/character/specs" icon="ra-cog" />
    </HomepageContainer>
  );
}

