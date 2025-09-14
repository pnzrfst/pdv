"use client";
import TableComponent from "@/components/Table";
import styles from "./page.module.css";
import { FaListOl } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { API } from "@/api";

import StockFormComponent from "@/components/StockForm";

interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
  cost: number;
  price: number;
  description: string;
  category_id: string;
}

export default function Stock() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [stockValue, setStockValue] = useState<number>(0);
  const [totalProductsInStock, setTotalProductsInStock] = useState<number>(0);
  const [categoriesCount, setCategoriesCount] = useState<number>(0);

  useEffect(() => {
    loadOverview();
    countCategories();
  }, []);

  async function countCategories() {
    try {
      const response = await API.get("/categories");
      setCategoriesCount(response.data.total);
    } catch (error) {
      console.error("Erro ao buscar as categorias:", error);
    }
  }

  async function loadOverview() {
    try {
      const response = await API.get("/products");
      setProducts(response.data.products);
      setStockValue(response.data.stockValue);
      setTotalProductsInStock(response.data.totalProducts);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
    },
    {
      field: "name",
      headerName: "Nome",
      width: 200,
    },
    {
      field: "category_id",
      headerName: "ID Categoria",
      width: 200,
    },
    {
      field: "quantity",
      headerName: "Quantidade",
      width: 200,
    },
    {
      field: "cost",
      headerName: "Custo",
      width: 200,
    },
    {
      field: "price",
      headerName: "Preço venda",
      width: 200,
    },
    {
      field: "description",
      headerName: "Descrição",
      width: 200,
    },
  ];

  const rows = products.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    quantity: product.quantity,
    cost: product.cost,
    price: product.price,
    description: product.description,
    category_id: product.category_id,
  }));

  return (
    <div>
      <header className={styles.header}>
        <h3>Estoque e inventário</h3>
        <p>Tenha controle dos processos que envolvem seu estoque.</p>
      </header>
      <main className="mainContent">
        <section className={styles.topBoxes}>
          <ul className={styles.boxes}>
            <li className={styles.aboutTopBox}>
              <h4 className={styles.h4}>Categorias:</h4>
              <div className={styles.headerBox}>
                <h1 className={styles.h1}>{categoriesCount}</h1>
                <FaListOl className={styles.svg} size={25} />
              </div>
              <p className={styles.p}>Todas as categorias.</p>
            </li>
            <li className={styles.aboutTopBox}>
              <h4 className={styles.h4}>Quantidade de produtos:</h4>
              <div className={styles.headerBox}>
                <h1 className={styles.h1}>{totalProductsInStock}</h1>
                <FaListOl className={styles.svg} size={25} />
              </div>
              <p className={styles.p}>Quantidade de produtos.</p>
            </li>
            <li className={styles.aboutTopBox}>
              <h4 className={styles.h4}>Valor do estoque:</h4>
              <div className={styles.headerBox}>
                <h1 className={styles.h1}>
                  {" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(stockValue)}
                </h1>
                <FaListOl className={styles.svg} size={25} />
              </div>
              <p className={styles.p}>Valor do estoque.</p>
            </li>
            <li className={styles.aboutTopBox}>
              <h4 className={styles.h4}>Fornecedores:</h4>
              <div className={styles.headerBox}>
                <h1 className={styles.h1}>Em breve</h1>
                <FaListOl className={styles.svg} size={25} />
              </div>
              <p className={styles.p}>Quantidade de fornecedores.</p>
            </li>
          </ul>
        </section>
        <section className={styles.addToInventory}>
          <div className={styles.addProductContainer}>
            <div className={styles.info}>
              <h3 className={styles.titleAddToInventory}>
                Adicionar ao estoque:{" "}
              </h3>
              <p className={styles.pAddToInventory}>
                Adicione produtos ao estoque
              </p>
            </div>
            <button
              className={styles.addNewProduct}
              onClick={() => setIsOpen(true)}
            >
              Adicionar
            </button>

            <StockFormComponent
              title="Cadastrar produto:"
              subtitle="Insira as informações e cadastre um produto."
              onSubmit={loadOverview}
              isOpen={isOpen}
              onCancel={() => {
                setIsOpen(false)
                loadOverview()
              }}
            ></StockFormComponent>
          </div>
        </section>
        <section className={styles.listStock}>
          <TableComponent columns={columns} rows={rows}></TableComponent>
        </section>
      </main>
    </div>
  );
}
