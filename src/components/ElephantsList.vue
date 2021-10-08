<template>
  <div class="elephant-list-container">
    <div class="elephant-list-content">
      <div class="list-header">
        <p>All Elephants</p>
      </div>
      <div class="elephant-table">
        <table>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Species</th>
            <th>Sex</th>
            <th>Affiliation</th>
            <th>Dob</th>
          </tr>
          <tr v-for="(elephant, index) in elephants" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ elephant.name }}</td>
            <td>{{ elephant.species }}</td>
            <td>{{ elephant.sex }}</td>
            <td>{{ elephant.affiliation }}</td>
            <td>{{ elephant.dob }}</td>
          </tr>
        </table>
      </div>
      <div class="elephant-pagination">
        <p>PAGE 1 OF 10</p>
        <div class="pagination">
          <a href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
          <a
            href="#"
            v-for="(page, index) in pages"
            :key="index"
            @click.prevent="!page.isActive"
            :class="page.isActive ? 'active' : ''"
            >{{ page.pageNum }}</a
          >
          <a href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "elephant-list",
  data() {
    return {
      elephants: [
        {
          name: "Name",
          species: "Species",
          sex: "Sex",
          affiliation: "Affiliation",
          dob: "Dob",
        },
        {
          name: "Name",
          species: "Species",
          sex: "Sex",
          affiliation: "Affiliation",
          dob: "Dob",
        },
        {
          name: "Name",
          species: "Species",
          sex: "Sex",
          affiliation: "Affiliation",
          dob: "Dob",
        },
        {
          name: "Name",
          species: "Species",
          sex: "Sex",
          affiliation: "Affiliation",
          dob: "Dob",
        },
        {
          name: "Name",
          species: "Species",
          sex: "Sex",
          affiliation: "Affiliation",
          dob: "Dob",
        },
        {
          name: "Name",
          species: "Species",
          sex: "Sex",
          affiliation: "Affiliation",
          dob: "Dob",
        },
        {
          name: "Name",
          species: "Species",
          sex: "Sex",
          affiliation: "Affiliation",
          dob: "Dob",
        },
        {
          name: "Name",
          species: "Species",
          sex: "Sex",
          affiliation: "Affiliation",
          dob: "Dob",
        },
      ],
      pages: [
        {
          pageNum: 1,
          isActive: true,
        },
        { pageNum: 2, isActive: false },
      ],
    };
  }
};
</script>

<style scoped>
.elephant-list-container {
  padding: 1.5rem 1rem;
}

.elephant-list-content {
  background: #fff;
}

.list-header {
  padding: 1.5rem;
}

.list-header p {
  color: #30425a;
  font-weight: 700;
}

.elephant-table table {
  width: 100%;
  border-collapse: collapse;
}

.elephant-table table tr {
  height: 4rem;
}

.elephant-table table tr:first-of-type {
  background-color: #e5e5e5;
}

.elephant-table table th,
.elephant-table table td {
  text-align: left;
  padding: 8px;
}

.elephant-table table td {
  color: #848383;
}

.elephant-table table tr:not(:first-of-type):nth-child(odd) {
  background-color: #f5f5f5;
}

.elephant-pagination {
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.elephant-pagination p {
  margin-right: 1rem;
}

.elephant-pagination .pagination {
  display: inline-block;
}

.elephant-pagination .pagination a {
  color: #30425a;
  float: left;
  padding: 8px 14px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #dfe3e8;
  border-radius: 4px;
  margin: 0 4px;
}

.elephant-pagination .pagination a.active {
    border: 1px solid #0546E0;
    color: #0546E0;
}

.elephant-pagination .pagination a:first-child:hover,
.elephant-pagination .pagination a:last-child:hover {
  background: #c8cfd5;
}

.elephant-pagination .pagination a:first-child:hover i,
.elephant-pagination .pagination a:last-child:hover i {
  color: #fff;
}

.elephant-pagination .pagination i {
  color: #c4cdd5;
}
</style>