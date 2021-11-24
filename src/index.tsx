import { useState } from 'react';

type UseSelectStateTypes = any;

export function useSelect<T>(
  defaultSelectedItems: T[] = [],
  basedOn: string = 'name',
  accelerator: string = 'name'
) {
  const [selectedItems, setState] =
    useState<UseSelectStateTypes>(defaultSelectedItems);
  const setSelect = (selectedItem: any) => {
    const foundIndex = selectedItems?.findIndex(
      (item: any) => item[accelerator] === selectedItem[basedOn]
    );
    const isExist = foundIndex === -1;
    const newArr: any = [
      ...selectedItems.slice(0, foundIndex),
      isExist && {
        ...selectedItem,
      },
      ...selectedItems.slice(foundIndex + 1),
    ];
    setState([...(new Set(newArr) as any)]);
  };
  return [selectedItems, setSelect];
}
