import Character from '../character';
import Team from '../team';

test('add character to team', () => {
  const team = new Team();
  const character = new Character('Oleg');

  team.add(character);

  expect(team.toArray()).toEqual([character]);
});

test('add some characters to team', () => {
  const team = new Team();
  const character1 = new Character('Oleg');
  const character2 = new Character('Ivan');
  const character3 = new Character('Egor');

  team.addAll(character1, character2, character3);

  expect(team.toArray()).toEqual([character1, character2, character3]);
});

test('error if the character is already in the team', () => {
  const team = new Team();
  const character = new Character('Oleg');

  team.add(character);

  expect(() => team.add(character)).toThrowError(`Персонаж ${character.name} уже в команде`);
});
