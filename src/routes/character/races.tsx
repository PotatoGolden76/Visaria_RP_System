import MenuCard from '../../components/menuCard';
import HomepageContainer from '../../components/homepageContainer';

export default function Races() {
  return (
    <HomepageContainer>
      <MenuCard text="AWDAWD" destination="/character/classes/warrior/" icon="ra-double-team" />
      <MenuCard text="AWD" destination="/character/classes/rogue/" icon="ra-book" />
      <MenuCard text="AWDAWD" destination="/character/classes/mage/" icon="ra-cog" />
    </HomepageContainer>
  );
}

