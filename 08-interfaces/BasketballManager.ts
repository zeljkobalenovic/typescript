import { Manager } from "./Manager";

// klasa koja implementira interfejs moze imati propertija i metoda , ali MORA implementirati metode interfejsa
export class BasketballManager implements Manager {
    // implementacija metoda interfejsa
    dailyPlan(): string {
        return "Vezbati kontre i pik.";
    }
    
}