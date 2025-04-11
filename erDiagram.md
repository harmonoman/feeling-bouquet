``` mermaid
erDiagram

    Nurseries ||--o{ Nursery_Flowers : grows
    Flowers   ||--o{ Nursery_Flowers : is_grown_by
    Distributors ||--o{ Nursery_Distributors : buys_from
    Nurseries ||--o{ Nursery_Distributors : sells_to
    Retailers ||--o{ Distributors : "works_with"


    Nurseries {
        int id pk
        varchar name
        varchar location
    }

    Flowers {
        int id pk
        varchar commonName
        varchar color
    }

    Nursery_Flowers {
        int id pk
        int nurseryId fk
        int flowerId fk
    }

    Retailers {
        int id pk
        varchar name
        varchar address
        varchar city
        varchar state
        int distributorId fk
    }

    Distributors {
        int id pk
        varchar name
        varchar address
        varchar city
        varchar state
    }

    Nursery_Distributors {
        int id pk
        int nurseryId fk
        int distributorId fk
    }