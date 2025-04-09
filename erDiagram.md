```mermaid
erDiagram

    Nurseries ||--o{ Nursery_Flowers : grows
    Flowers   ||--o{ Nursery_Flowers : is_grown_by
    Retailers   ||--o{ Retailer_Flowers : is_purchased_by
    Distributors ||--o{ Retailer_Flowers : sells_to
    Distributors ||--o{ Distributor_Flowers : distributes
    Flowers ||--o{ Distributor_Flowers : is_distributed_by

    Nurseries {
        int id pk
        string name
        string location
    }

    Flowers {
        int id pk
        string commonName
        string color
    }

    Nursery_Flowers {
        int id pk
        int nurseryId fk
        int flowerId fk
    }

    Retailers {
        int id pk
        string name
        string address
        string city
        string state
    }

    Distributors {
        int id pk
        string name
        string address
        string city
        string state
    }

    Distributor_Flowers {
        int id pk
        int distributorId fk
        int flowerId fk
    }

    Retailer_Flowers {
        int id pk
        int distributorId fk
        int retailerId fk
    }