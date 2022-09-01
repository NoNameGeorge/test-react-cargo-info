type CargoType = 'Контейнер' | 'Генеральный груз'
type CargoStatus =
	| 'Новый'
	| 'Назначен ответственный менеджер'
	| 'Расчет стоимости заказа'
	| 'Рассчитана стоимость заказа'
	| 'Груз принят в порту отправления'
	| 'Груз размещен на судне'

export interface Cargo {
	id: number
	type: CargoType
	pinnedOrder: number
	sender: string
	actNumber: string | null
	invoiceNumber: number | null
	date: Date
	status: CargoStatus
    manager: string
    deliveryToPort: string
    cargoType: string
    volume: string
    length: string
    height: string
    width: string
    description: string
    tmts: string
    freightUnit: string
    location: string
    acceptanceActNumber: string
}
