// import store from "../store/vuex";
// import swal from "sweetalert2";

class HelperClass {

    numberFormat(num) {
        var str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }

    // show the server errors
    showErrors(error, noty) {
        // store.state.loading = false
        if (error.response) {
            let errors = error.response.data.errors
            if (typeof (errors) != "undefined") {
                for (let key in errors) {
                    noty.error(errors[key], {
                        timeout: 2000,
                        progressBar: true,
                    })
                }
            } else {
                let status_code = error.response.status;
                let object = {
                    '403': 'دسترسی غیر مجاز',
                    '404': 'صفحه مورد نظر یافت نشد',
                    '500': 'خطای سرور رخ داده است',
                    '503': 'سرور در حال به روزر رسانی است',
                    '401': 'ابتدا باید وارد شوید',
                    '429': 'تعداد دفعات درخواست به سرور بیش از حد مجاز',
                    '410': 'صفحه مورد نظر ناپدید شده است',
                    '405': 'متد ارسالی نامعتبر است'
                }
                noty.error(object['' + status_code], {
                    timeout: 2000,
                    progressBar: true,
                })
            }

        }
    }


    // show success message
    showSuccess(noty) {
        store.state.loading = false;
        noty.success('عملیات با موفقیت انجام شد');
        this.scrollTop()
    }


    //scroll page top
    scrollTop() {
        let scrollTop = window.pageYOffset;
        let scrollTopSetInterval = setInterval(() => {
            scrollTop = scrollTop - 30;
            if (scrollTop <= 0) {
                clearInterval(scrollTopSetInterval)
            }
            window.scrollTo(0, scrollTop);
        }, 20)
    }


    //check is array empty?
    checkIsEmpty(data) {
        if (data.length === 0) {
            swal.fire({
                text: 'حداقل یک مورد را انتخاب کنید',
                icon: 'warning'
            })
            return true;
        }
        return false;
    }


    // swal asking modal
    showSwalAsking() {
        return swal.fire({
            text: 'آیا اطمینان دارید؟',
            icon: 'warning',
            showConfirmButton: true,
            showCancelButton: true,
            cancelButtonText: 'خیر',
            confirmButtonColor: 'red',
            cancelButtonColor: 'green',
            confirmButtonText: 'بله'
        })
    }

    // images methods
    validateFileUpload(inputElement, formElement, size = null, validTypes = null) {
        let file = inputElement.files[0];
        let file_size = file['size'];
        let file_type = file['type'];
        if (file_size > size * 1024 * 1024) {
            swal.fire({
                text: 'سایز فایل بیشتر از ' + size + ' مگابایت نمیتواند باشد',
                icon: 'warning'
            })
            formElement.reset();
            return false;
        }
        if (!validTypes.includes(file_type)) {
            swal.fire({
                text: 'فرمت فایل نادرست است',
                icon: 'warning'
            })
            formElement.reset();
            return false
        }
        return true;
    }

    // show image preview and store the file in store
    showImagePreview(which_file, inputElement, formElement) {
        switch (which_file) {
            case (1):
                store.state.file = null;
                break;

            case (2):
                store.state.file2 = null;
                break;

            case (3):
                store.state.file3 = null;
                break;

        }
        let fileReader = new FileReader();
        let img = formElement.querySelector('img');
        if (img) {
            img.remove();
        }
        fileReader.onload = function (e) {
            let src = e.target.result;
            let img = document.createElement('img');
            formElement.insertAdjacentElement('beforeend', img);
            img.src = src
        }
        fileReader.readAsDataURL(inputElement.files[0]);

        formElement.querySelector('i.remove').style.display = 'block'

        return inputElement.files[0];
    }

    // remove  image previews in system
    removeImagePreview(which_file = null, inputElement, formElement) {
        switch (which_file) {
            case (1):
                store.state.file = null;
                break;

            case (2):
                store.state.file2 = null;
                break;

            case (3):
                store.state.file3 = null;
                break;

        }
        formElement.querySelector('img').remove();

        formElement.querySelector('i.remove').style.display = 'none'

        formElement.reset()

    }

    // remove all images previews in system
    removeAllImagePreviews() {
        store.state.file = null;
        let forms = document.querySelectorAll('form');
        forms.forEach(item => {
            item.reset();
            item.querySelector('img').remove();
            item.querySelector('i.remove').style.display = 'none'
        })

    }

    checkNumberValidation(event) {
        let keyCode = event.keyCode;
        if (!event.target.value.length) {
            if (keyCode === 48) {
                event.preventDefault()
            }
        }
        if (keyCode === 189 || keyCode === 187 || keyCode === 69) {
            event.preventDefault();
        }
    }

    spliceTeacherName(teacher_name) {
        return teacher_name.length < 20 ? teacher_name : teacher_name.slice(0, 20) + "..."
    }

    uploadVideoValidation(file) {
        let file_size = file['size'];
        if (file_size > 419430400) {
            return false;
        }
        return true;
    }

    makeRandomString(length) {
        var result = [];
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() *
                charactersLength)));
        }
        return result.join('');
    }

    addToTable(permission, list, item, has_switch_condition, has_edit = true,factor=false) {
        let updateItems;
        let condition_switch_on_text='';
        let condition_switch_two_text='';


        if (!factor){
            condition_switch_on_text='فعال کن';
            condition_switch_two_text='غیر فعال کن'
        }else {
            condition_switch_on_text='تغییر به پرداخت شده';
            condition_switch_two_text='تغییر به پرداخت نشده'
        }


        // sorry for this dirty code

        // if is factor table
        if (factor){

            if (has_switch_condition && has_edit) {
                updateItems = {
                    switch_condition: item.is_paid ? "<i class='active_it' title='"+condition_switch_two_text+"'> <box-icon color='green' name='check'></box-icon></i>" : "<i title='"+condition_switch_on_text+"' class='active_it'><box-icon color='red' name='x'></box-icon></i>",
                    edit: '<i  title="ویرایش" class="active_it"><box-icon color="green" type=\'solid\' name=\'message-edit\'></box-icon></i>',
                }
            } else if (has_switch_condition && !has_edit) {
                updateItems = {
                    switch_condition: item.is_paid ? "<i class='active_it' title='"+condition_switch_two_text+"'> <box-icon color='green' name='check'></box-icon></i>" : "<i title='"+condition_switch_on_text+"' class='active_it'><box-icon color='red' name='x'></box-icon></i>",
                }
            } else {
                updateItems = {
                    edit: '<i  title="ویرایش" class="active_it"><box-icon color="green" type=\'solid\' name=\'message-edit\'></box-icon></i>',
                }
            }
        }
        // if is not factor table
        else{
            if (has_switch_condition && has_edit) {
                updateItems = {
                    switch_condition: item.status ? "<i class='active_it' title='"+condition_switch_two_text+"'> <box-icon color='green' name='check'></box-icon></i>" : "<i title='"+condition_switch_on_text+"' class='active_it'><box-icon color='red' name='x'></box-icon></i>",
                    edit: '<i  title="ویرایش" class="active_it"><box-icon color="green" type=\'solid\' name=\'message-edit\'></box-icon></i>',
                }
            } else if (has_switch_condition && !has_edit) {
                updateItems = {
                    switch_condition: item.status ? "<i class='active_it' title='"+condition_switch_two_text+"'> <box-icon color='green' name='check'></box-icon></i>" : "<i title='"+condition_switch_on_text+"' class='active_it'><box-icon color='red' name='x'></box-icon></i>",
                }
            } else {
                updateItems = {
                    edit: '<i  title="ویرایش" class="active_it"><box-icon color="green" type=\'solid\' name=\'message-edit\'></box-icon></i>',
                }
            }
        }





        let deleteItem = {
            delete: '<input type="checkbox"  value="' + item.id + '">'
        }


        if (store.state.permissions.includes(permission + 'update')) {

            Object.assign(list, updateItems)
        }

        if (!factor){
            if (store.state.permissions.includes(permission + 'delete')) {
                Object.assign(list, deleteItem)
            }
        }


    }

    addToColumn(permission, columns, has_switch_condition, has_edit = true,factor=false) {


        if (store.state.permissions.includes(permission + 'update')) {

            if (has_switch_condition && has_edit) {

                columns.push(
                    {
                        label: 'ویرایش',
                        field: 'edit',
                        html: true
                    },
                    {
                        label: 'تغییر وضعیت',
                        field: 'switch_condition',
                        html: true
                    },
                )

            } else if (has_switch_condition && !has_edit) {

                columns.push(
                    {
                        label: 'تغییر وضعیت',
                        field: 'switch_condition',
                        html: true
                    },
                )

            } else {

                columns.push(
                    {
                        label: 'ویرایش',
                        field: 'edit',
                        html: true
                    },
                )

            }

        }

        if (!factor){
            if (store.state.permissions.includes(permission + 'delete')) {

                columns.push(
                    {
                        label: 'انتخاب',
                        field: 'delete',
                        html: true
                    },
                )

            }
        }


    }





}

export default new HelperClass();