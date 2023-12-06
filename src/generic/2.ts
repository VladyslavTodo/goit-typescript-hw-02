/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
};

// type SomeType = Pick<AllType, "name" | "position" | "color" | "weight">;

function compare<TTop extends AllType, BBottom extends AllType>(
    top: Pick<TTop, keyof AllType>,
    bottom: Pick<BBottom, keyof AllType>
): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}

export {};
