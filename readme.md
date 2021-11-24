# useSelect

### [npm link](https://www.npmjs.com/package/use-select-react)

#### How to install

###### With npm:

```javascript
npm install --save use-select-react
```

###### With yarn:

```javascript
yarn add use-select-react
```

#### How to use:

```javascript
import { useSelect } from 'use-select-react';
const Example = () => {
  const [selectedItems, setSelect] = useSelect<SomeType>();
  return (
    <div>
      {someArray.map((item) => {
        return <span onClick={setSelect.bind(null, item)}>{item.name}</span>;
      })}
    </div>
  );
};
```
