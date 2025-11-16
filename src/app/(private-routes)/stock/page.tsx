"use client";
import TableComponent from "@/components/Table";
import styles from "./page.module.css";
import { FaListOl } from "react-icons/fa6";
import { use, useEffect, useState } from "react";
import { API } from "@/api";

import StockFormComponent from "@/components/StockForm";
import { GridPaginationModel, GridRenderCellParams } from "@mui/x-data-grid";
import EditModal from "@/components/EditModal";
import { useSearchParams } from "next/navigation";

interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
  cost: number;
  price: number;
  description: string;
  category_id: string;
  category_name: string;
}

export default function Stock() {
  const search = useSearchParams();
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });
  const [rowCount, setRowCount] = useState<number>(1);

  
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProdut] = useState<string>("");

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [stockValue, setStockValue] = useState<number>(0);
  const [totalProductsInStock, setTotalProductsInStock] = useState<number>(0);
  const [categoriesCount, setCategoriesCount] = useState<number>(0);

  useEffect(() => {
    loadOverview();
    countCategories();
    if(search.get("new_product") === "true"){
      setIsOpen(true);
    }
  }, []);

  async function countCategories() {
    try {
      const response = await API.get("/categories");
      setCategoriesCount(response.data.total);
    } catch (error) {
      console.error("Erro ao buscar as categorias:", error);
    }
  }

  async function loadOverview(page = 1, pageSize = 10) {
    try {
      const response = await API.get("/products", {
        params: {page, pageSize}
      });
      console.log(response)
      setProducts(response.data.products);
      setStockValue(response.data.stockValue);
      setTotalProductsInStock(response.data.totalProducts);
      setRowCount(response.data.totalPages)
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "name",
      headerName: "Nome",
      width: 300,
    },
    {
      field: "category_name",
      headerName: "Categoria",
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
      width: 100,
    },
    {
      field: "actions",
      headerName: "Ações",
      width: 300,
      renderCell: (params: GridRenderCellParams) => (
        <div
          className="btnsAction"
          style={{
            display: "flex",
            alignItems: "center",
            width: "200px",
            justifyContent: "space-evenly",
          }}
        >
          <button
            className="editBtn"
            onClick={() => {
              console.log(`Clicou em editar no produto com o id ${params.id}`);
              setSelectedProdut(String(params.id));
              setEditModalOpen(true);
            }}
            style={{
              padding: "10px",
              marginTop: "5px",
              width: "35%",
              color: "#111827",
              backgroundColor: "#FFFFFF",
              border: "1px solid #6B7280",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Editar
          </button>
          <button
            className="deleteBtn"
            onClick={() => console.log("poi")}
            style={{
              padding: "10px",
              marginTop: "5px",
              width: "35%",
              backgroundColor: "#FFFFFF",
              border: "1px solid #EF4444",
              borderRadius: "6px",
              color: "#EF4444",
              cursor: "pointer",
            }}
          >
            Apagar
          </button>
        </div>
      ),
    },
  ];

  const rows = products.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    quantity: product.quantity + " un",
    cost: "R$ " + product.cost.toFixed(2),
    price: "R$ " + product.price.toFixed(2),
    description: product.description,
    category_name: product.category_name,
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
                setIsOpen(false);
                loadOverview();
              }}
            ></StockFormComponent>
          </div>
        </section>
        <section className={styles.listStock}>
          <EditModal
            selectedId={selectedProduct}
            id={selectedProduct ?? ""}
            isOpen={editModalOpen}
            onSubmit={() => {
              setEditModalOpen(false);
              loadOverview();
            }}
            onCancel={() => {
              setEditModalOpen(false);
              loadOverview();
            }}
          />
          <TableComponent
            rowCount={rowCount}
            columns={columns}
            rows={rows}
            paginationModel={paginationModel}
            onPaginationModelChange={(model) => {
              setPaginationModel(model);
              loadOverview(model.page + 1, model.pageSize);
            }}
          ></TableComponent>
        </section>
      </main>
    </div>
  );
}
