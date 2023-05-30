import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'


import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
//start
//success
//error
//https://quantum-sf72.onrender.com/service/it
export const GetVendors = createAsyncThunk("userapi/data", async (_, thunkAPI) => {
  const resss = await axios.get('https://quantum-sf72.onrender.com/vendor')
    .then(function (response) {
      const res = response.data
      // console.log(res);
      return res;
    })
    .catch(function (error) {
      // console.log(error);
      return error;
    });
  return resss;
})


export const GetItServices = createAsyncThunk("userapi/datait", async (_, thunkAPI) => {
  const resss = await axios.get('https://quantum-sf72.onrender.com/service/it')
    .then(function (response) {
      const res = response.data
      // console.log(res);
      return res;
    })
    .catch(function (error) {
      // console.log(error);
      return error;
    });
  return resss;
})


export const GetSecurityServices = createAsyncThunk("userapi/datasecurity", async (_, thunkAPI) => {
  const resss = await axios.get('https://quantum-sf72.onrender.com/service/security')
    .then(function (response) {
      const res = response.data
      // console.log(res);
      return res;
    })
    .catch(function (error) {
      // console.log(error);
      return error;
    });
  return resss;
})




export const SetVendors = createAsyncThunk("userapi/GetVendor", async (data, thunkAPI) => {

  var bodyFormData = new FormData();
  bodyFormData.append('name', data.name);
  bodyFormData.append('description', data.description);

  bodyFormData.append('photo', data.photo);

  bodyFormData.append('websiteurl', data.websiteurl);




  const res = await axios.post('https://quantum-sf72.onrender.com/vendor',bodyFormData,{
    headers: {
      'Content-Type': 'multipart/form-data',
      // 'flag':0
    }})
  .then(function (response) {
    const res = response
    console.log(res);
    return res;
  })
  .catch(function (error) {
    console.log(error);
    return error;

  });

  return res;
})




export const SetServices = createAsyncThunk("userapi/PostService", async (data, thunkAPI) => {

  var bodyFormData = new FormData();
  bodyFormData.append('name', data.name);
  bodyFormData.append('description', data.description);

  bodyFormData.append('photo', data.photo);

  bodyFormData.append('type', data.type);




  const res = await axios.post('https://quantum-sf72.onrender.com/service',bodyFormData,{
    headers: {
      'Content-Type': 'multipart/form-data',
      // 'flag':0
    }})
  .then(function (response) {
    const res = response
    console.log(res);
    return res;
  })
  .catch(function (error) {
    console.log(error);
    return error;

  });

  return res;
})









export const UserSlice = createSlice({
  name: 'userapi',
  initialState: {
    vendors: [
    {
      id: 1,
      name: 'Test 1',
      description: 'Test description 1',
      photopath: 'https://example.com/path/to/image1.png',
      type: true,
    },
    {
      id: 2,
      name: 'Test 2',
      description: 'Test description 2',
      photopath: 'https://example.com/path/to/image2.png',
      type: false,
    },
    {
      id: 3,
      name: 'Test 3',
      description: 'Test description 3',
      photopath: 'https://example.com/path/to/image3.png',
      type: true,
    },
    {
      id: 4,
      name: 'Test 4',
      description: 'Test description 4',
      photopath: 'https://example.com/path/to/image4.png',
      type: false,
    },
  ] ,
    mainVendors:[],
    itservices:[],
    securityservices:[],
    services:[],
    loading: false,
    accepted: false,

  },
  reducers: {
    DeleteVendor: (state, action) => {
      const stats = false;
      axios.delete(`https://quantum-sf72.onrender.com/vendor/remove_vendor/${action.payload.VendorId}`)
    .then(function (response) {
      alert("deleted")
      window.location.reload();
      const res = response.data
      stats = true;
      return res;
    })
    .catch(function (error) {
      // console.log(error);
      state = false
      return error;
    });
    if (state == true){
      
    }
    },

    DeleteService: (state, action) => {
      const stats = false;
      axios.delete(`https://quantum-sf72.onrender.com/service/remove_service/${action.payload.VendorId}`)
    .then(function (response) {
      alert("deleted")
      window.location.reload();
      const res = response.data
      stats = true;
      return res;
    })
    .catch(function (error) {
      // console.log(error);
      state = false
      return error;
    });
    if (state == true){
      
    }
    },



    setMetaServices: (state, action) => {
      state.metaData.services.name = action.payload.name;
      state.metaData.services.description = action.payload.description;
      state.metaData.services.Keys = action.payload.Keys;
      // localStorage.setItem("servicesPageName", state.metaData.services.name);
      // localStorage.setItem("servicesPageDescription", state.metaData.services.description);
      // localStorage.setItem("servicesPageKeys", state.metaData.services.Keys);
      state.data.name = "";
      state.data.Keys = "";
      state.data.description = ""
    },
    setMetaVendors: (state, action) => {
      state.metaData.vendors.name = action.payload.name;
      state.metaData.vendors.description = action.payload.description;
      state.metaData.vendors.Keys = action.payload.Keys;
      // localStorage.setItem("vendorsPageName", state.metaData.vendors.name);
      // localStorage.setItem("vendorsPageDescription", state.metaData.vendors.description);
      // localStorage.setItem("vendorsPageKeys", state.metaData.vendors.Keys);
      state.data.name = "";
      state.data.Keys = "";
      state.data.description = ""
    },
    setMetaAbout: (state, action) => {
      state.metaData.about.name = action.payload.name;
      state.metaData.about.description = action.payload.description;
      state.metaData.about.Keys = action.payload.Keys;
      // localStorage.setItem("aboutPageName", state.metaData.about.name);
      // localStorage.setItem("aboutPageDescription", state.metaData.about.description);
      // localStorage.setItem("aboutPageKeys", state.metaData.about.Keys);
      state.data.name = "";
      state.data.Keys = "";
      state.data.description = ""
    },
    setMetaContact: (state, action) => {
      state.metaData.contact.name = action.payload.name;
      state.metaData.contact.description = action.payload.description;
      state.metaData.contact.Keys = action.payload.Keys;
      // localStorage.setItem("contactPageName", state.metaData.contact.name);
      // localStorage.setItem("contactPageDescription", state.metaData.contact.description);
      // localStorage.setItem("contactPageKeys", state.metaData.contact.Keys);
      state.data.name = "";
      state.data.Keys = "";
      state.data.description = ""

    },
    setMetaWhyUs: (state, action) => {
      state.metaData.whyUs.name = action.payload.name;
      state.metaData.whyUs.description = action.payload.description;
      state.metaData.whyUs.Keys = action.payload.Keys;
      // localStorage.setItem("whyUsPageName", state.metaData.whyUs.name);
      // localStorage.setItem("whyUsPageDescription", state.metaData.whyUs.description);
      // localStorage.setItem("whyUsPageKeys", state.metaData.whyUs.Keys);
      state.data.name = "";
      state.data.Keys = "";
      state.data.description = ""
    },
    setData: (state, action) => {
      state.data.name = action.payload.name;
      state.data.description = action.payload.description;
      state.data.Keys = action.payload.Keys;

    },

    setLocalStorage : (state) => {
      window.localStorage.setItem("StoreMetaData", JSON.stringify(state.metaData));
    }

  },
  extraReducers: {
    [GetVendors.pending]: (state) => {
      state.loading = true;
    },
    [GetVendors.fulfilled]: (state, action) => {
      state.loading = false;
      // state.allUserData =  action.payload
      const data = action.payload.vendors
      
      state.vendors = data
      
      console.log(data)

    },
    [GetVendors.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    [GetItServices.pending]: (state) => {
      state.loading = true;
    },
    [GetItServices.fulfilled]: (state, action) => {
      state.loading = false;
      // state.allUserData =  action.payload
      const data = action.payload.services
      
      state.itservices = data
      
      console.log(data)

    },
    [GetItServices.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    [GetSecurityServices.pending]: (state) => {
      state.loading = true;
    },
    [GetSecurityServices.fulfilled]: (state, action) => {
      state.loading = false;
      // state.allUserData =  action.payload
      const data = action.payload.services
      
      state.securityservices = data
      
      console.log(data)

    },
    [GetSecurityServices.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    [SetVendors.pending]: (state) => {
      state.loading = true;
    },
    [SetVendors.fulfilled]: (state, action) => {
      state.loading = false;
      alert("added")
      window.location.reload();
      // state.allUserData =  action.payload
// console.log(action.payload)
      

    },
    [SetVendors.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },




    [SetServices.pending]: (state) => {
      state.loading = true;
    },
    [SetServices.fulfilled]: (state, action) => {
      state.loading = false;
      alert("added")
      // window.location.reload();
      // state.allUserData =  action.payload
// console.log(action.payload)
      

    },
    [SetServices.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  }

}
)

// Action cREators are generated for each case reducer function
export const { DeleteVendor, DeleteService , setMetaServices, setMetaVendors, setMetaAbout, setMetaContact, setMetaWhyUs, setData,setLocalStorage } = UserSlice.actions

export default UserSlice.reducer