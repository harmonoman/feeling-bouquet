``` mermaid
erDiagram

    Nurseries ||--o{ Nursery_Flowers : grows
    Locations ||--o{ Nurseries : where_located
    Flowers   ||--o{ Nursery_Flowers : is_grown_by
    Flowers ||--o{ Flower_Colors : displays
    Flower_Types ||--o{ Flowers : type_of

    Colors ||--o{ Flower_Colors : colors_of
    Distributors ||--o{ Nursery_Distributors : buys_from
    Locations ||--o{ Distributors : where_located
    Nurseries ||--o{ Nursery_Distributors : sells_to
    Distributors ||--o{ Retailers : supplies
    Locations ||--o{ Retailers : where_located


    Nurseries {
        int id pk
        varchar name
        int locationId fk
    }

    Flowers {
        int id pk
        int flowerTypeId fk
    }

    Colors {
        int id pk
        varchar name
    }

    Flower_Colors {
        int id pk
        int flowerId fk
        int colorId fk
    }
    
    Flower_Types {
        int id pk
        varchar commonName
    }

    Nursery_Flowers {
        int id pk
        int nurseryId fk
        int flowerId fk
    }

    Retailers {
        int id pk
        varchar name
        int locationId fk
        int distributorId fk
    }

    Distributors {
        int id pk
        varchar name
        int locationId fk
    }

    Nursery_Distributors {
        int id pk
        int nurseryId fk
        int distributorId fk
    }

    Locations {
        int id pk
        varchar address
        varchar city
        varchar state
    }

    