const tabsArrays = () => {
  return [
    {
      name: 'Помощь',
      state: 'help',
      disable: false,
      disable_text: 'Еще в разработке',
    },
    { name: 'Карта', state: 'map', disable: false, disable_text: '' },
    { name: 'Команда', state: 'team', disable: false, disable_text: '' },
    {
      name: 'Маркетплейс',
      state: 'marketplace',
      disable: true,
      disable_text: 'Еще в разработке',
    },
  ];
};

export default tabsArrays;
