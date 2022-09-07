import MenuCard from '../../components/menuCard';
import HomepageContainer from '../../components/homepageContainer';

export default function Classes() {
  return (
    <HomepageContainer>
      <MenuCard text="Warrior" destination="/character/classes/warrior/" icon="ra-double-team" />
      <MenuCard text="Rogue" destination="/character/classes/rogue/" icon="ra-book" />
      <MenuCard text="Mage" destination="/character/classes/mage/" icon="ra-cog" />
    </HomepageContainer>
  );
}

